var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const session = require("express-session");

const sessionRoute = require('./routes/session.js');
const postRoute = require('./routes/post.js');
const messageRoute = require('./routes/message.js');
const personalDataRoute = require('./routes/personalData.js');
const premiumRoute = require('./routes/premium.js');
const subscriptionRoute = require('./routes/subscription.js');

// require api routes

var app = express();

app.set('trust proxy', 1) // trust first proxy 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// serve angular app from dist folder
app.use(express.static(path.join(__dirname, 'dist')));


// user api routes
app.use("/session", sessionRoute);
app.use("/post", postRoute);
app.use("/message", messageRoute);
app.use("/personalData", personalDataRoute);
app.use("/premium", premiumRoute);
app.use("/subscription", subscriptionRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
