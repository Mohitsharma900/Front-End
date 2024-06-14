/*function is a package in which you store your
lines of code which can be executed multiple 
times when you call it*/

console.log("M");
console.log("O");
console.log("H");
console.log("I");
console.log("T");

function sayMyName() {
console.log("M");
console.log("O");
console.log("H");
console.log("I");
console.log("T");
}

sayMyName();


/*                       parameters     */                
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2) 
// }

/*           arguements */
// addTwoNumbers(3, 8);
// addTwoNumbers(3, "8");//38

//return
function addTwoNumbers(number1, number2) {
    let result= number1 + number2
    return(result) ;
}

const result = addTwoNumbers(2, 10);
console.log(result)

function loginUserMessage(username = "sam"){
    if(!username/*(professional way of writing "username === undefined")*/){
        console.log("PLease enter a username");
        return
    }//won't enter this block as sam as default value is already passed
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh")) //this will replace sam

function calculateCartPrice(val1, val2, ...num1){
    return num1
}//rest operator is also used with 3 dots as spread
//operator difference  is made by where you use it..

console.log(calculateCartPrice(200, 400, 500,2000))

 const user = {
    userName : "Mohit",
    price : 199
 }

 function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and the price is ${anyobject.price}`)
 }

 handleObject(user);

 const myNewArr = [200, 400, 600, 800]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArr ));
 

//  const functionOne = (function (num1 , num2){ 
//     console.log(num1 + num2)
//  })(45,52)