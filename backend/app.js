const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const getUserFromJWT = require("./middlewares/get-user-from-jwt");
const passport = require("passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const paymentsRouter = require("./routes/payments");
const reservationRouter = require("./routes/reservation");
const authRouter = require("./routes/auth");
// const loginRouter = require('./routes/login');
const loginRequired = require("./middlewares/login-required");
// const session = require("express-session");
const cors = require("cors");

const app = express();
app.use(cors());

require("dotenv").config();
require("./passport")();
mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/reservation", getUserFromJWT, reservationRouter);
app.use("/payments", getUserFromJWT, paymentsRouter);
app.use("/users", getUserFromJWT, usersRouter);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({ err: err.message });
});

const port = 8080;

app.set("port", port);

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
