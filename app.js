var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config/db');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

//Connect to database
//mongoose.connect(db.url);

require('./routes/api')(app);

app.listen(port);
console.log('Server listening on port ' + port);