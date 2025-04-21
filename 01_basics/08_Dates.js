let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toTimeString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())

console.log(mydate.getMonth())          // jan -> 0
console.log(mydate.getDay())            // sun -> 0

console.log(typeof mydate)

// create date
// let createddate = new Date(2023,0,22)
// console.log(createddate.toDateString())
// let createddate = new Date(2023,0,22,12,30)
// let createddate = new Date("2025-04-21")             // YY-MM-DD
let createddate = new Date("01-21-2025")                // MM-DD-YY
console.log(createddate.toLocaleString())

console.log("################################################################")

let timestamp = Date.now()
console.log(timestamp)              // in miliseconds
console.log(createddate.getTime())      // in milisecods
console.log(Math.floor(Date.now()/1000))            // in seconds

let newdate = Date.now()
newdate.toLocaleString('defauelt',{
    weekday : "long"
})