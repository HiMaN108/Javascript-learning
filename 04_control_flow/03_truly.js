//NOTE - trultly and falsy statment

const userEmail = "himan@gmail.com"

if(userEmail){
    console.log(`user got the email`);
}else{
    console.log(`dont have the email`);
}

//TODO - 

//FIXME - flase value

false, 0, -0, BigInt, 0n, "" , null, undefined, NaN

//FIXME - --> truthy value that will shock me

"0", 'false', " ", [], {} , function(){}

//SECTION - some important notes
// false == 0 --> true
// false == ' '  --> true
// 0 == ' '   --> true

//SECTION - logical operator
// nullis coaleascing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10

// val1 =null ?? 10  //NOTE - In this case also val1  = 10
// val1 = undefined ?? 12 //NOTE - In this case val1 = 12

// val1 = null ?? 10 ?? 12  //NOTE - also here it take the first values i.e 10

//NOTE - tertarny operator is different from the nullis coalesacing opertar

// condition ? true : false

const icePack =100

icePack >=90 ? console.log(`pay 10 rupees`) : console.log(`donest want`);


