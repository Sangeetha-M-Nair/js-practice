"use strict";
var user = "JOhn Mock";
console.log(typeof user);
var city = "New York";
var country = "USA";
var designation = "sr dev";

var location = city + "," + country;
console.log(location);
var favQ = "To 'single-quote' or \"double-quote\"";
console.log(favQ);

var employeeData = "Name: " + user + "\nDesignation:" + designation;
console.log(employeeData);

// template literals to do multiline

var employeeData1 = `Name: ${user}
Designation: ${designation}`;
console.log(employeeData1);
// emoji

var organization = "Sentinel Design\u{2122}";
console.log(organization);
// Sentinel Design™

var emoji = "\u{1F642}";
console.log(emoji);
// 🙂


var myQuote = "Best friends are like a mirror";
var author = "Joe Mockery";
var fullQuote = myQuote + " -- " + author;
var lengthOfString = fullQuote.length;
console.log(fullQuote);
console.log("Length of the Quote: ", lengthOfString);


