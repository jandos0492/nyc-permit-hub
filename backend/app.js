const axios = require("axios");
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const { environment } = require("./config");
const isProduction = environment === "production";
const { ValidationError } = require("sequelize");
const app = express();
const routes = require("./routes");

app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
    })
);

// Set the _csrf token and create req.csrfToken method
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


// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = { message: "The requested resource couldn't be found." };
    err.status = 404;
    next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        let errors = {};
        for (let error of err.errors) {
            errors[error.path] = error.message;
        }
        err.title = "Validation error";
        err.errors = errors;
    }
    next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    });
});

// Keep-Alive Function (Cyclic Task)
const cyclicFunc = async () => {
    while (true) {
        try {
            // Send request to your /api/keep-alive endpoint
            await axios.get('https://nyc-permit-hub.onrender.com/api/alive');
            console.log('Keep-alive request made to the server');

            // Wait for 14 minutes (14 * 60 * 1000 milliseconds)
            await new Promise(resolve => setTimeout(resolve, 840000));

        } catch (error) {
            console.error('Error in cyclicFunc:', error);
            // Wait 1 minute before retrying in case of an error
            await new Promise(resolve => setTimeout(resolve, 60000));
        }
    }
};

// Start the cyclic function
cyclicFunc();


module.exports = app;