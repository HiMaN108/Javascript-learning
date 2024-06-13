//NOTE - For statements syntax

for (let cat  = 0; cat  < 5; cat ++) {
    const element = cat ;
    console.log(element);
    
}

//NOTE - break and continue

for (let index = 0; index <10 ; index++) {
    if (index ==5) {
        console.log(`detected 5`);
        break;
    }

 console.log(`value of index if ${index}`);
    
}

for (let index = 0; index <10 ; index++) {
    if (index ==5) {
        console.log(`detected 5`);
        continue;  
    }

 console.log(`value of index if ${index}`);
    
}