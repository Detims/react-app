const express = require('express');
const path = require("path");
const createErrors = require("http-errors");

const indexRouter = require("./routes/index.cjs");
const usersRouter = require("./routes/users.cjs");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 errors
app.use((req, res, next) => 
    next(createErrors(404))
);

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    
    // render error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;