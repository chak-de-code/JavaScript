// const tinderuser= new Object()
const tinderuser= {}
// console.log(tinderuser)
tinderuser.name = "john"
tinderuser.id = "abcd@gmail.com"
tinderuser.islogin = false

console.log(tinderuser)

const regularuser = {
    email : "xyz@gmail.com",
    fullname :{
            userfullname : {
            firstname : "John",
            lastname : "william"
        }
    }
}
console.log(regularuser.fullname)
console.log(regularuser.fullname.userfullname.firstname)
// 4:08
