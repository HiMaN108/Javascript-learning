//NOTE -  for of loop

const arr = [1,2,3,4,5]

for(const i of arr){
    console.log(i);
}


//NOTE -  Maps --> unique value and in given order 


const map = new Map()

map.set('IN', "India");
map.set('use', "United state of America")
map.set('Fr', "france")

console.log(map);

for(const [key, value] of map){
    console.log(key , '-', value);
}

const myObject = {
    'game1': 'nfs',
    'game2' : 'Spiderman'
}
                                                    //NOTE - my object is not iterable 
for (const [key, value] of myObject) {

    console.log(key, '-', value);
    
}