"use strict";
const PI = 3.1412;
// const radiusOfCircle = 5.2;
const circle = {
  radius: 5.2,
};
circle.radius = 6.4;

// const circumference = 2 * PI * radiusOfCircle;
// radiusOfCircle = 6.4;

const circumference = 2 * PI * circle.radius;

console.log(`Circumference of the circle: ${circumference}`);
