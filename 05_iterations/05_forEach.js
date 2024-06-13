//NOTE - for each loop

const codding = [ 'js',' ruby', 'java', 'c++']

codding.forEach(element => {
    console.log(element);     //NOTE -  promise fucniton
});


const myCodding = [
    {
        lanName: "javascripts",
        langFileName: "js"
    },
    {
        lanName: "java",
        langFileName: "java"
    },
    {
        lanName: "pythons",
        langFileName: ".py"
    },
]

//NOTE - for each loop

myCodding.forEach( (item) => {

    console.log(item.langFileName);

})