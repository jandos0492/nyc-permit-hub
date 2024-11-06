const axios = require("axios");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const schedule = require('node-schedule');

const { environment } = require("./config");
const isProduction = environment === "production";
const { ValidationError } = require("sequelize");
const app = express();
const routes = require("./routes");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
    app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true
    }));
}

app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
    })
);

app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

app.use(routes);

app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = { message: "The requested resource couldn't be found." };
    err.status = 404;
    next(err);
});

app.use((err, _req, _res, next) => {
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

// Cyclic Task: Runs every day from 10am to 2pm ET
const cyclicFunc = async () => {
    try {
        await axios.get('https://nyc-permit-hub.onrender.com/api/alive');
        console.log('Keep-alive request made to the server');
    } catch (error) {
        console.error('Error in cyclicFunc:', error);
    }
};

schedule.scheduleJob('*/14 10-13 * * *', cyclicFunc);
schedule.scheduleJob('0-14 14 * * *', cyclicFunc);

module.exports = app;