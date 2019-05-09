var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var index = require("./routes/index");
var actions = require('./routes/actions');


var app = express();

app.use(logger('dev'));
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//cokieParser
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main',}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/public/views');


// rotas
app.use('/', index);
app.use('/actions', actions);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = app;