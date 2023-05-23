/*
oper1 and oper2 &&
true true =>returns sec operand
false true => false
true false  => false

oper1 and oper2 ||
true true =>returns sec operand
false true => returns sec operand

*/

"use strict";

let inputUsername = "joe";
let inputPassword = "joe@901";

const database = {
  joe: {
    user: "Joe Mockery",
    password: "joe@901",
  },
};

let checkPassword = database[inputUsername].password === inputPassword;
checkPassword &&
  console.log(`${database[inputUsername].user || `User`} is logged in...`);
