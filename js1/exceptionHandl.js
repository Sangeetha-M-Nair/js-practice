/* Exception is an event that breaks the exceution flow of a program. 

*/
var a = 10;
var b = 20n;

try {
  var c = a + b;
  console.log(`the result is ${c}`);
} catch (err) {
  console.log("oops error", err);
}

var d = "10";
var e = 20;

try {
  if (typeof d != typeof e)
    throw new Error("Both operands must belong to the same data typ!");
  var m = d + e;
  console.log(m);
} catch (err) {
  console.log(" ---------------error", err);
}

console.log("out of the try");


"use strict";

var costOfProduct = 1000;
var discount = 1200;

try {
  if (costOfProduct <= discount)
    throw new Error(
      "Cost of the product should be higher than the discount value"
    );
  var totalCost = costOfProduct - discount;
  console.log("Total Cost: ${totalCost}");
} catch (error) {
  console.log("Oops! We have an error: ", error.message);
} finally {
  console.log("Thank you for using the app!");
} 



