// structural data types
// Objects are data structures

// cat = {
//   color: "white",
//   breed: "persian",
// };

//object is collection of properties
// name value pair

var sentinel = {
  name: "Sentinel Design \u{2122}",
  employeecount: 44,
  city: "Tokyo",
};

console.log(typeof sentinel);
console.log(sentinel.name);

// another way main method bcz props can be use🔰🔰
console.log(sentinel["employeecount"]);

var prop = "city";
console.log(sentinel[prop]);

sentinel.stockSymbol = "SDJ";
delete sentinel.city;

console.log(sentinel);

sentinel.city = "USA";
console.log(sentinel);

// creating an object

var currencies = new Object();
currencies["Japan"] = "Yen";
currencies["US"] = "US Dollar";

var john = {
  name: "john",
  address: sentinel.city,
};

var sara = {
    name: "sara",
    address: sentinel.city,
};


var user = {
  name: "Michelle Roberts",
  age: 28,
  location: {
    city: "New York",
    country: "US",
  },
};
user.isAdmin = false;
console.log("User: ", user.name);
console.log("City: ", user.location.city);
console.log("Age: ", user.age);
console.log("Is User an Administrator?", user.isAdmin);