var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all( function(req,res,next) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
})
.get( function(req,res,next){
	res.end("this is leader names");
})
.post(function(req,res,next){
	res.end("the new leader is:"+req.body.name+"description"+req.body.description);
})
.delete(function(req,res,next){
	res.end("delete all files");
})
 
leaderRouter.route('/:id')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/plain'});
	next();
})
.get(function(req,res,next){
	res.end("showing all leaders");
})
.put(function(req,res,next){
	res.write("updating the leader number:"+req.params.id);
	res.end("update the name"+req.body.name+"description"+req.body.description);
})
.delete(function(req,res,next){
	res.end("delete the leader");
})

module.exports = leaderRouter;