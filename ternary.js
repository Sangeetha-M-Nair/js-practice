"use strict";

const today = "Thursday";

const typeOfDay =
  today === "Saturday" || today === "Sunday"
    ? "Weekend"
    : today === "Wednesday"
    ? "Hump Day"
    : "Weekday";

console.log(`${today} - ${typeOfDay}`);

const number = 5;
const result =
  number * 2 > 5
    ? number === 10
      ? "Number is 5"
      : "Twice of number is not 10"
    : "Number is not 5";
console.log(result);
