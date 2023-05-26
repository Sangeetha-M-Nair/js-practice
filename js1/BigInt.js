console.log("Hello the value of pi is " + Math.PI);
console.log(+true);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

var bigIntNum = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntNum);
console.log(bigIntNum + 1n);

var largno = 122_334_445_394n;
console.log(largno + 2n);

var septillion = 1_000_000_000_000_000_000_000_000n;
var plusOne = septillion + 1n;
console.log("Septillion plus one is equal to", plusOne);