var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var dishRouter = require('./dishRouter.js');
var promoRouter = require('./promoRouter.js');
var leaderRouter = require('./leaderRouter.js');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));

app.use('./dishes',dishRouter);
app.use('./leadership',leaderRouter);
app.use('./promotions',promoRouter);

app.listen(port,hostname,function(){
	console.log('Server running at http://'+hostname+":"+port);

});