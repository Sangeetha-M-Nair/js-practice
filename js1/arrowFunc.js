// const addNos = (a, b) => {
//   a + b;
// };
//Anonymous functions
//call or bind will not work on arrow function
// The use of a fat arrow (=>) and the absence of the function keyword makes up for the syntax of an arrow function which is, in effect anonymous functions.
//What makes arrow functions different is that they do not create their own ‘this’ context and access the 'this' context of their parent function.
//With arrow functions, this is lexically bound

"use strict";

const rectangle = {
  width: 20,
  area() {
    return (length) => this.width * length;
  },
};
try {
  const areaOfRectangle = rectangle.area();
  console.log(`Area: ${areaOfRectangle(50)}`);
} catch (error) {
  console.log(error.message);
}
