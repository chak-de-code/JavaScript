// stack(all Primitive data types)copy variable,  heap(all Non-Primitive data types) reference of variable
let myname = "John william"
let anothername = myname
anothername = "Smith Nelson"

console.log(myname)
console.log(anothername)

let userone ={
    email : "JohnWilliam@gmail.com",
    upi : "john@w12"
}
let usertwo = userone

usertwo.email = "nelson@s21"
console.log(userone.email)
console.log(usertwo.email)
