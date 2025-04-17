// let score = 33 
// let score = "33"
// let score = "33avs"
// let score = null
// let score = undefined
// let score = false
let score = "hello"


console.log(typeof(score));
console.log(typeof score);

let numvalue = Number(score)

console.log(typeof numvalue)
console.log(numvalue)

/*
"33" => 33
"33abc" => NaN ; typeof NaN is number
true => 1
null => 0
undefined => NaN
"hello" => NaN
 */

// let isLoggedIn = ""
// let isLoggedIn = 1
let isLoggedIn = "hello"

let boolvalue = Boolean(isLoggedIn)
console.log(boolvalue);

/*
"" => false
"hello" => true
0 => false
1 => true

*/

let num = 33
let strnumber = String(num)
console.log(typeof strnumber);
console.log(strnumber);
