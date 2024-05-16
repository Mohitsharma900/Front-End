//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n





// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//***************************************************************** */

// Stack (Primitive).. Heap (Non-Primitive)..
// Stack & Heap are memory types..
// Stack memory me var declare karne se copy milti hai and heap se refference..
let myYoutubeName= "MohitSharma"
let anotherName = myYoutubeName;

anotherName = "Plucky Roasts";
console.log(anotherName);
console.log(myYoutubeName)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "mohit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

/*
 so basically when you changed the value of stack
 data it returns the copy and thus not change the value of the equal one
 but when you do the same with heap it takes the value as reference for
 both the stated objs and thus change the value of both..
 */

 
// stack is one above another..
// heap is a one big container.. 