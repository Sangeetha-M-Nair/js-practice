// Objects allows us to hold multiple properties which may be used to desctibe an enitiy

"use strict";

//  create the Person constructor function
//Constructor functions are used to create _objects
//The name of the constructor function must start with _Capital letter____


const Person = function (firstname, lastname, age, email) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.age = age;
  this.email = email;
  this.introduction = () => `${this.firstName} is ${this.age} years old`;
  this.canDrive = () => (this.age >= 18 ? "Yes" : "No");
};

// create two users

const Joe = new Person("Joe", "Mason", 17, "joe.m@mycorp.com");
console.log(Joe.introduction());
console.log(`Can the user drive? ${Joe.canDrive()}`);
const Jane = new Person("Jane", "Mandenga", 28, "jane@mycorp.com");
console.log(Jane.introduction());
console.log(`Can the user drive? ${Jane.canDrive()}`);



//What does getDay() of Date() construct returns?

//The nth day (in number) with reference to the week. Eg, 0 for Sunday, 1 for Monday and so on.