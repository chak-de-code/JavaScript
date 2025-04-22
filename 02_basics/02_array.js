const marvels = ["IronMan", "Thor", 'Spideraman']
const dc_heros = ["superman","Batman","Flash"]

// marvels.push(dc_heros)                         // push an array inside array(existing)
// console.log(marvels)
// console.log(marvels[3])
// console.log(marvels[3][1])

newarr = marvels.concat(dc_heros)               // concatenate two arrays and returns a new array
// console.log(newarr)

// spread method 
const allheros = [...marvels,...dc_heros]
// console.log(allheros)

const nestedarr = [1,2,3,[4,5,6],7,8,[9,1,5,[2,6,7]]]
const actualarr = nestedarr.flat(Infinity)                  // Infinity is here the depth of array ,it can be(1,2,3...)
// console.log(nestedarr)
// console.log(actualarr)

// checking an element is array or not
console.log(Array.isArray("Hello!"))           
// convert into array
console.log(Array.from("Hello!"))
console.log(Array.from({name:"John"}))          // interesting it return [] , to make an array we have to specify that from keys or value array will made

const score1 =100
const score2 =500
const score3 =300
console.log(Array.of(score1,score2,score3))         // convert into array
