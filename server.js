var express = require('express');
var app = express();
var db = require('./connection.js');

var port = 3000;

app.listen(port);
console.log("app is listening at", port);
