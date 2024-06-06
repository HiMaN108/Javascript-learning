// //singleton
// //objectcreation


// //objects literals

// const mySym= Symbol("key1");

// const myobject = {
//     name : "Himan",
//     mySym: "myse",
//     class: "superior",
//     rollNo: "108",
//     email: "him2000.maurya@gmail.com"
// }

// // console.log(myobject.name);

// // myobject.email = "koko@gmail.com"

// // console.log(myobject.email)

// myobject.greeting = function(){
//     console.log("hello user")
// }

// myobject.greeting1 = function(){
//     console.log(`hello js user, ${this.name}`)
// }
// console.log(myobject.greeting);
// console.log(myobject.greeting1());



// const regularUser = {
//     email: "some@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Himan",
//             lastName: "maurya"
            
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName)


const obj1 ={
    1: "a",
    2: "b",
}

const obj2 = {
    3:"c",
    4 : "d"
}

const obj3 = {
    obj1, obj2
}

// console.log(obj3);

const obj4 = Object.assign({},obj1, obj2);

// console.log(obj4)

const obj5 ={ ...obj1, ...obj2}

// console.log(obj5)

console.log(Object.keys(obj1))




