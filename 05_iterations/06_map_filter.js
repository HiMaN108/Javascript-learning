//NOTE - here we learn about the forEach 

const myYear = [ "1st", '2nd', '3rd']


const values = myYear.forEach( (item) => {          //NOTE - so here we see that forEach is doe'nt return any valuesokay....!
    // console.log(item);
    return item
})

// console.log(values);


//NOTE - filter also take promise call back

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)   //NOTE - if we open  scope{ } then we have to explict use return

console.log(newNums);

//NOTE - if you want to use forEach statement for above conditon we can use my some modification 

const neNums= []

myNums.forEach( (item) => {
    if(item >4){
        neNums.push(item)
    }
})

console.log(neNums);