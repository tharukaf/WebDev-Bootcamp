var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
	let sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof woof!"
	}
	var usrAnimal = req.params.animal.toLowerCase();
	var resultString = "The " + usrAnimal + " says " + sounds[usrAnimal];
	
	res.send(resultString);
});

app.get("/repeat/:word/:repeatTime", function(req, res){
	var text = req.params.word;
	var num = Number(req.params.repeatTime);
	var string = "";
	for(var i=0; i< num; i++){
		string = string + text + " ";
	}
	res.send(string);
});

app.get("*", function(req, res){
	res.send("Sorry! Page not found...What are you doing with your life?");
})


app.listen(3000, function(){
	console.log("Server started at port 3000");
});

