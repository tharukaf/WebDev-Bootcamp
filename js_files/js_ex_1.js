var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");

var greeting = "Hello " + firstName + " "+ lastName+ " who is " + age;
alert(greeting);
console.log(greeting);

var remainderWhenDivBy4 = age % 4;
var numOfLeapYears= (age-remainderWhenDivBy4) / 4;

var totalDays = ((age-numOfLeapYears) * 365) + (numOfLeapYears * 366);
alert("You have been alive " + totalDays + " days");






