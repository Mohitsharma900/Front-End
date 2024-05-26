/*
IIFE provides encapsulation, allowing you to 
create private scopes for variables and functions.
This prevents variable conflicts and unintended 
modifications of data in the global scope.
Encapsulation is crucial in larger applications
and when working with multiple libraries.
*/

/* IIFE means a function which is immediately 
executed right it is declared */

(function dataBase(){
    console.log("DB Connected")
})();//semicolon is compulsory to execute further code

(function addone(num1, num2){
    console.log(num1 + num2);
})(82,89);

((name)=>{
    console.log(`DB Connected Twice ${name}`)
})("Mohit")