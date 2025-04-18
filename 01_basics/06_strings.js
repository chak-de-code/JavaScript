const name = "John"
const num = 50

// console.log(name + num + "Value")

// string interpulation
console.log(`Hello ! My name is ${name} and my per day income is ${num} dollars. `)

const player = new String("NidhiReddu")
console.log(player)
console.log(typeof player)          // object 
// so player is a string with keys 0,1,... and values as "N","i",...

console.log(player[0]);
console.log(player.__proto__);

console.log(player.length)
console.log(player.toUpperCase())
console.log(player.charAt(3));
console.log(player.indexOf('d'))

console.log(player.substring(0,4));
// console.log(player.substring(-6,3));            // no effect of negative indexing

console.log(player.slice(-8,6))

const newstring = "    John      "
console.log(newstring)

// trim works on whitespaces and line terminators only

console.log(newstring.trim())
console.log(newstring.trimStart())
console.log(newstring.trimEnd())

const url = "https:/Reddu%258Website.com"
console.log(url.replace("%258","_"));

// convert string to an array
const str = "This is a string."
console.log(str.split(' '))

