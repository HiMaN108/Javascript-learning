const user = {
    userName: "Golu",
    price : 0,

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`)   // here this indicate the current context
        console.log(this)
    }
}


// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

//FIXME - so this code for 'this' indicate the current context whereas outside this denotes the window object in brower empty boject in node envoroment

//ANCHOR - 
// console.log(this)   

function F1(){
    let username = "Himansh"
    // console.log(this.username);
}

F1()

//NOTE - Arrow funtions usecase

const coco  = () => {
    let uesrname = "golu"
    // console.log(uesrname);
}

//NOTE - basic syntax of arroe function

const addTwo = (num1, num2) => {
    return num1+num2
}

// console.log(addTwo(4,5));

//NOTE - implicite return 

const ads = (num1, num2) => num1 +num2

const ade =(num1, num2) => (num1+num2)  //LINK - no need to add return statement 

//NOTE - but in case of object we have to use { } this brackets like -->

const addTw = (num1, num2) => ({username: "Himanshu"})