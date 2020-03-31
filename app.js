var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const bodyParser = require('body-parser')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//const mongooseDB = require('./database')


var app = express();



//database

mongoose.Promise = global.Promise
mongoose.set('debug', true)        
mongoose.connection
    .on('error', error => reject(error))
    .on('close', ()=> console.log('database connection closed'))
    .once('open', ()=> {
        const info = mongoose.connections[0]
        console.log('db connected')
    })

mongoose.connect('mongodb://localhost/trainer')


//sessions
app.use(session({
        secret: 'sdfj,hbkjkgjyghjgvjghv',
        resave: true,
        savreUnitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    })
)



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
