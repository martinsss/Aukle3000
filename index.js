const express = require('express');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
var flash    = require('connect-flash');
var mongoose = require('mongoose');

const port = 3000;
const host = '0.0.0.0';

// db
const mongo = require('mongodb');
const url = "mongodb://localhost:27017";
mongoose.connect(url); // connect to our database

// init app
const app = express();

// auth
var passport = require('passport');
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./config/passport')(passport);

const indexR = require('./routes/index')(passport);

// middleware
app.use(helmet());

// body-parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));


// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// static folder
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'style')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/modules', express.static(__dirname + '/node_modules'));


// db
(mongo.MongoClient.connect(url, { useNewUrlParser: true }, function(err, database){
		if (err) throw err;
		app.locals.db = database.db('aukle3000');
		console.log('connected to db aukle3000');
}));

app.use('/', indexR);

/*app.use(function(err, req, res, next) {
	res.status(400).send({err:err});
	next();
});*/


app.listen(port, host, function() {
	console.log(`app listening on ${port}, ${host}`);
});

