var fruits = ["apple", "orange", "kiwi"];
console.log(typeof fruits);
//object

console.log(fruits instanceof Array);

// so we can identify array by instance of
fruits.push("avocado");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits[3] = "mango";
fruits[2] = "pineapple";
fruits[4] = "avocado";
console.log(fruits);

// nested arrats
var users = [
  { id: 1, name: "john" },
  { id: 2, name: "wswd" },
  { id: 3, name: "mike" },
];

console.log(users[2]["name"]);
// same array
//if admin is changed then users also changed bcz pointing to one momory
var admins = users;
admins[2] = { id: 3, name: "Richard" };
console.log("admins" + admins);
console.log(users[2]["name"]);

//to break this shallow copy
var admins = [...users];
// var admins = users.slice();
admins[1] = { id: 2, name: "kiran" };
console.log("admins" + admins);
console.log(admins[1]["name"]);
console.log(users[1]["name"]);


//assgn
"use strict";
var bestsellers = [
  "Contact",
  "Deception Point",
  "Digital Fortress",
  "Jurassic Park",
  "Shantaram",
];
console.log("Bestsellers: ", bestsellers.toString());
bestsellers.push("Freakonomics");
bestsellers[1] = "The Lord of the Rings";
console.log("Bestsellers: ", bestsellers.toString());

