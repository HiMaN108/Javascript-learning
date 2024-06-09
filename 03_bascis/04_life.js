//NOTE - immediately INvoked function expressions (IIFE)

// function coffee(){
//     console.log(`DB connected`);
// }
// coffee()  //NOTE - one way to IIFE but what about the global fucntion poullated

//NOTE - actual sytanx of IIFE

(function coffee1(){            //NOTE - named IIFE
    console.log(`DB connected`)
})();  //FIXME - ';' this is important here

//NOTE - for arrow function

( (name) => {              //NOTE - simple IIFE
    console.log(`DB connected two ${name}`)
})('Himanshu')