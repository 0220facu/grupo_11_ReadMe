const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); 
const methodOverride = require('method-override'); 
const session = require('express-session')
const cookieCheck =require('./middelwares/cookieCheck')
const generateSession =require('./middelwares/generateSession')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'textoSuperSecreto',
  resave: true,
  saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(generateSession)

app.use(cookieCheck)

var usersRouter = require('./routes/users');
var mainRouter = require('./routes/main');
var articleRouter = require('./routes/articulos');
var adminRouter = require('./routes/admin');
var apiRouter = require('./routes/API/Api')

app.use('/', mainRouter);
app.use('/articulo', articleRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
app.use('/api', apiRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
