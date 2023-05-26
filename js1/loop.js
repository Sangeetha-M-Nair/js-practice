//  the purpose of continue keyword?
// It is used to restart the loop

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
for (let x = 0; x < planets.length; x++) {
  if (x !== 3) {
    continue;
  }
  console.log(`Perseverance Rover is on ${planets[x]}`);
}

const products = [
  {
    id: 1,
    name: "Oranges",
    quantity: 2,
    cost: 1.2,
  },
  {
    id: 2,
    name: "Chocolate Cake",
    quantity: 2,
    cost: 65,
  },
  {
    id: 3,
    name: "Coke Zero",
    quantity: 12,
    cost: 1.45,
  },
];

const totalCost = (item) => {
  return `Total Cost: $${item.quantity * item.cost}
------------------------------`;
};

for (const product of products) {
  for (const prop in product) {
    console.log(`${prop}: ${product[prop]}`);
  }
  console.log(totalCost(product));
}

("use strict");

let m = 0,
  n = 1,
  evenNumbers = [],
  oddNumbers = [];

// Use the while loop here
while (m <= 100) {
  evenNumbers.push(m);
  m += 2;
}

// Use the do-while loop here
do {
  oddNumbers.push(n);
  n += 2;
} while (n <= 100);

console.log(`Even Numbers (0 - 100): ${evenNumbers.toString()}`);
console.log("--------------------------------------");
console.log(`Odd Numbers (0 - 100): ${oddNumbers.toString()}`);

// What does arrayName.toString() do?
// It separates all elements of array by comma

// do..while loop?
// The condition is evaluated after executing the statemen

// recursive function

const calcPower = function (num, power) {
  if (power !== 1) {
    return num * calcPower(num, power - 1);
  }
  return num;
};

console.log(calcPower(4, 5));
console.log(calcPower(10, 2));
console.log(calcPower(20, 8));
