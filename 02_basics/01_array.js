/* 
Javascript array are resize able and can store different types of elements
array are Zero-indexed
array copy operations creates shallow copy (properties share the same reference)

*/
const arr = [0,1,2,3,4,5]
const arr2 = ["hello",3.235,4,true]
const myarr = new Array(1,2,5,8,9)
console.log(myarr[1]);

// Array methods
myarr.push(20)
myarr.push(8)
console.log(myarr)

myarr.pop()
console.log(myarr)

myarr.shift()
myarr.unshift()

console.log(myarr)

console.log(myarr.includes(14))
console.log(myarr.indexOf(14))
console.log(myarr.indexOf(9))

const newarr = myarr.join()
console.log(myarr,typeof myarr)
console.log(newarr,typeof newarr)

// slice(return a part of array) and splice(return and remove a part of array)
console.log("A",myarr);
const myn = myarr.slice(1,3);
console.log(myn)

console.log("B",myarr);
const myn2 = myarr.splice(1,3);

console.log("C",myarr);
console.log(myn2)

//3:39