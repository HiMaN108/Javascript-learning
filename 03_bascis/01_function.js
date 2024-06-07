function addTwoNumber(num1, num2){
    const num3= num1+num2;
    console.log(num3);

}

// addTwoNumber(2,3);

function addThreeNumber(num1, num2, num3){
    let result= num1 +num2 + num3;
    return result;
}

// console.log("result" , addThreeNumber(2,3,4));

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage(""));  ///--> here we get undefined

function calculateCartPrice(num2,num3, ...num1){      ///Rest opertor
     return num1;
}

// console.log(calculateCartPrice(3,4,554,343));


//object usecased

const user = {
    username: "Himanshu",
    price: 0
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);


//passing array;

const myNewArray = [200,300,122]

function getArray(getmyArray){
    return getmyArray;
}

console.log(getArray(myNewArray));