let value =5
let nvalue = -value
console.log(nvalue)

// Airthmatic operations
console.log(6+8)
console.log(6-8)
console.log(6*8)
console.log(79/8)
console.log(6**8)
console.log(6%8)

// String operations
let str1 = "Hello"
let str2 = "John"
str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 5);
console.log(1 + 2 + "5");

// if string come first then all the remaining items are treated as string

console.log(true);              // true
console.log(+true);                 //1
// console.log(true+);          // error

let num1, num2, num3        
num1 =num2 = num3 = 6+9         // not a good practice 

let gameCounter =249;
++gameCounter;          // prefix
gameCounter++;          // postfix
console.log(gameCounter)
console.log("***************************************************")
// ###################### Comparisons ############################# 
console.log(2>1)
console.log(2<1)
console.log(2<=1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)

// this will not give predictable result on comparing of two different data types
console.log("2" > 1);
console.log("02" > 1);

// equality check and comparison(<,>,<=,>=) works differently comparison converts null to number 0 
console.log(null > 0);          // false
console.log(null == 0);         // false
console.log(null >= 0);         // true

console.log(undefined > 0);          // false
console.log(undefined == 0);         // false
console.log(undefined >= 0);         // false

// strict check ===
console.log("2" == 2);          // convert datatype
console.log("2" === 2);                 // strictly check datatypes
