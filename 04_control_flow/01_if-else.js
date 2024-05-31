// if
// const isUserLoggedIn = true ; 
// const temp = 41

// if(temp === 40 ){
//    console.log("temp is 41 ")
// }else{
//     console.log("temp is not 41")
// }

// // < , >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if(score > 100){
//     const power= "fly";
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`) can't be accessed globally if not declared using var so you should avoid var

// const balance = 1000;

// if (balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn= true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("Allow to shop.");
}else{
    console.log("Don't allow to shop");
}

const loggedInFromGooggle = true;
const loggedInFromEmail = false;

if(loggedInFromEmail || loggedInFromGooggle){
    console.log("User Logged In.");
}
