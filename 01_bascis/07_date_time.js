// dates

let myDate = new Date();

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(Math.floor(myTimeStamp/1000));