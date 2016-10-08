var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var validator = require('node-mongoose-validator')
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session')
app.use(session({
	secret: 'thisisafancysecret',
	resave: true,
	saveUninitialized: true,
	cookie:{secure:false}
}))

app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/bower_components')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000,function(){
	console.log('running on 8000')
})