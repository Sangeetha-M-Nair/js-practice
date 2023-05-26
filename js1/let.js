"use strict";

// why we use let
var cost = 1000;

if (cost >= 1000) {
  var cost = 950;
  //let cost=950
  console.log(`Special clearancee cost : ${cost}`);
}

// but original price is overriden but while using let the problem is solved
console.log(`Original Cost : ${cost}`);

("use strict");

let x = 200;

for (let x = 0; x < 10; x++) {
  console.log(`The number is ${x}`);
}
console.log(`Original Number: ${x}`);
