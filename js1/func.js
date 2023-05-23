"use strict";

let tempInFahrenheit = 77;

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(
  `${tempInFahrenheit} degrees Fahrenheit is `,
  toCelsius(tempInFahrenheit),
  "degrees Celsius"
);
