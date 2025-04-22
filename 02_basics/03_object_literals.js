// Singleton : from constructor always form singleton but when we made from literal then no singleton made

// object literals

const mysym = Symbol("key1")
const mysym2 = Symbol("key2")
const jsuser = {
    name :"John",
    "full name" : "John Telson",
    mysym : "Mykey1",                          // wrong way to use symbol as a key , it returns a string
    [mysym2] : "Mykey2",                          // use symbol as a key
    location : "Mumbai",
    email:"johntelson@gmail.com",
    loggedin : false,
    loggeddays : ["Wednesday","Friday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])

console.log(jsuser["full name"])
// console.log(jsuser."full name")         // error 
// full name cannot access only by square brackets

console.log(typeof jsuser.mysym)
console.log(jsuser.mysym)
console.log(jsuser[mysym2])

// if we want that our object doesn't change then we freeze the object
jsuser.email = "john@micrsoft.com"
// Object.freeze(jsuser)
jsuser.email = "john@chatgpt.com"
console.log(jsuser)

// function in object
jsuser.greeting = function(){
    console.log("Hello JS user !!!")
}
// jsuser.greeting()
console.log(jsuser.greeting)                    // gives function reference
console.log(jsuser.greeting())                  // gives function return


jsuser.greeting2 = function(){
    console.log(`Hello JS user , ${this["full name"]}!!!`)
    console.log(`Hello JS user , ${this.name}!!!`)                          // `` string interpulation  ; this refer to same object(jsuser)
}
console.log(jsuser.greeting2())