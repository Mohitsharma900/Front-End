//Dates..

let myDate= new Date();
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate= new Date(2024, 4, 17);
console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getSeconds())


newDate.toLocaleString('default',{
    weekday: "long",
});