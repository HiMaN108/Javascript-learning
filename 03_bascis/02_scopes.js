// let a =10;
// const b = 20
// var c= 40



if(true){
    let a=10;
    const b=20
    // var c = 40
}




// console.log(a)
// console.log(b)
// console.log(c)


//mini hosting 

function one(){
    const userName = "Himanshu"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()

////===========================INterstersintg-------------------->


addone(5)
                              ///allowed
function addone(num){
    return num +1;
}


addTwo(4)  //---> NOt allowed
const addTwo = function(num){
    return num +2
}

