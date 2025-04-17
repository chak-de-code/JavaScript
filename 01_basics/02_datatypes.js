"use strict";           // treat all JS code as newer version

// alert(3+3);          // we are using nodejs not browser

// prior readability
console.log(3
    +3); console.log("Hello!")

// data types

/*
how data is put in memory and access it based on this data can be classified as:
1. Primitive : these are call by value data types
(7 types) : string , Number, Boolean, null, undefined, Symbol , bigint

2.Reference(or Non - Primitive):
Array, Objects, Functions
type of all these is object but typeof function is function object
*/

let id = Symbol('123')
let anotherid = Symbol('123')
console.log(id === anotherid);
console.log(typeof id)

let bignum = 4659879354654854654n
console.log(typeof bignum)

// array
const marvals = ["IronMan","Thor","Captain America", "spider Man"];
// objects
let myobj = {
    name: "john",
    age : 21,
}

// function
const myfunc = function(){
    console.log("Hello World");
}
console.log(typeof marvals);
console.log(typeof myobj);
console.log(typeof myfunc);

/*
number (range => 2 to power 53)
bigint
string =>""
bool = true / false
null => standalone value
undefined => value not assigned
symbol => unique
object
 */

let name = "John"
let age = 26
let isloggedIn = false

console.log(typeof age);        // number
console.log(typeof "hello")     // string
console.log(typeof undefined)           // undefined
console.log(typeof null)            // object