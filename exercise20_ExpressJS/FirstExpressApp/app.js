var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there");
});

app.get("/bye", function(req, res){
	res.send("<h1>Bye</h1>");
});

app.get("*", function(req, res){
	res.send("You are a star");
});

app.listen(3000, function(){
	console.log("Server listening on port 3000");
});