const score = 400;
console.log(score)

const num = new Number(100);
console.log(num);                   // it specifically returns that type of num is Number : [Number : 100]

// Number methods

console.log(num.toString().length, typeof num);         // can use string methods with num
console.log(num.toFixed(2));                            // fixed number after decimal

const n = 123.8965
// console.log(n.toPrecision(2));
console.log(n.toPrecision(3));

const hundereds = 100000000
// console.log(hundereds.toLocaleString());            // put comma between 0's in british/ american format
console.log(hundereds.toLocaleString('en-IN'));         // Indian standard

/*
CONSOLE =>
Number
Number.length
Number.MIN_VALUE
Number.MAX_VALUE
Number.MIN_SAFE_INTIGER
Number.MAX_SAFE_INTIGER
*/

// ######################## Maths #############################
console.log(Math);      // run this on console to know more about maths methods/ use
console.log(Math.abs(-9));
console.log(Math.round(4.9))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.pow(5,3))
console.log(Math.sqrt(169))
console.log(Math.min(2,5,78,10,169))

console.log(Math.random())                  // 0 to 1
console.log(Math.random()*10 + 1)           // upto 0
console.log(Math.floor(Math.random()*10) + 1);           // Single values

const min = 20;
const max = 40;
console.log(Math.floor(Math.random()*(max - min + 1)) + min);       // between a range
