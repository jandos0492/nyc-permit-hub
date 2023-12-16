const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const { ValidationError } = require("sequelize");
const path = require("path");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
    contentSecurityPolicy: false
}));

app.use(cors({ origin: ["http://localhost:3000", "https://nyc-permit-hub.onrender.com"] }));

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", "http://localhost:8080"],
        }
    })
);

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public directory

// Example route
// const router = require("./routes/index");
const router = require("./routes/index");
app.use(router); // Mount the router to the app

// Set th e_csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

app.use(routes); // Connect all the routes

// Error handling
// Catch unhandled requests and forward ot error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Validation console.error();";
    }
    next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;