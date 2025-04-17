// Java script is dynamically typed language

const accountId = 147852
let accountEmail = "nobody@gmail.com"
var accountPassword = "85769"
accountCity = "Banglore"
let accountState;

/* prefer the use of let and const instead of var because of issue in block scope and function scope */

// accountId = 589647    // constant cannot change           
accountEmail = "great@gmail.com"
accountPassword = "41036897"
accountCity = "Panipat"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
