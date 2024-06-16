const descripter = Object.getOwnPropertyDescriptors(Math, "PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai =  {
    name : 'ginger chai' , 
    price : 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

chai.name ="Mohit"

console.log(Object.getOwnPropertyDescriptor(chai , "name"));
