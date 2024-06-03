const user ={
  username: "hima",
  price : 999,
  
  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this)
  }
}

// this --> use the to indicate the current  context methods



// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

/*--------------notes----------------->
brower ke ander global object is window  */


//arrow function  


// function chai(){
//   let username = "himan";
//   console.log(this.username);    // undefined
// }

// chai()

// const chai = function(){
//   let username = "himan";
//   console.log(this.username);    // undefined
// }

// const chai = ()=> {
//   let username ="hima"    //behaviue like prevoius one
//   console.log(this);
// }

// chai()


// //normal arrow function    ---> 1st methods 
// const addTwo = (num1, num2) => {        //normal arrow function
//   return num1+num2
// }
// console.log(addTwo(5,5))


// Implict arrow function-->  2nd methods

// const addTwo =(num1 ,num2) => num1 + num2

// console.log(addTwo(3,4))


// // const addTwo =(num1 ,num2) => (num1 + num2) 
// ⁡⁢⁣⁡⁢𝙘⁢onsole.log(addTwo(5,6))

//notes points==2  𝙧𝙚𝙩𝙪𝙧𝙣 𝙞𝙨 𝙪𝙨𝙚 𝙤𝙣𝙡𝙮 𝙞𝙣 𝘵𝘩𝘪𝘴 𝘣𝘳𝘢𝘤𝘬𝘦𝘵 { } 𝘯𝘰𝘵 𝘪𝘯 
// 𝘯𝘰𝘵 𝘪𝘯 𝘵𝘩𝘦 ( ) 𝘣𝘳𝘢𝘤𝘬𝘦𝘵𝘴 𝘰𝘬𝘢𝘺⁡


