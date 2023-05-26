"use strict";
// scope
/* lexically scoped language
visibility depend on their position of the code+
 * */
var user = "sarah rice";

console.log(globalThis.hasOwnProperty("user"));

// console.log(globalThis);
var secretno = 2;

function addNumbers(a, b) {
  var sum = a + b + secretno;
  return sum;
}
console.log(addNumbers(5, 3));
