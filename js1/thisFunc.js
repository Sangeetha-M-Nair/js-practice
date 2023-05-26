"use strict";

// outside the object the this keyword points to global object
console.log(this); //window
//It is a keyword which stores an object referencing current context
//Inside a function, the value of this varies and it depends on how the function is invoked.

const someFunct = function () {
  console.log(this);
  return this; //global object and if use strict is there then undefined
};

someFunct();

let user = {
  name: "Rob Williams",
  age: 22,
  livesIn: "New Jersey",
  introduction: function () {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I live in ${this.livesIn}`;
  },
};

console.log(user.introduction());
