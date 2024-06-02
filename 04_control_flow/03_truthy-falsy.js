const userEmail = "mohit909gmail.com"

if (userEmail){
    console.log("Got user Email")
}else {
    console.log("Don't have user Email")
}

/* 

falsy value:
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values:
"0", "false", " ", [], {}, function(){},

*/

/* 
const names = [];
if (names.length === 0){
    console.log("Arr is empty.");
}

const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is empty.");
}
*/

//Nullish Coalescing Operator(??): null undefined:

let val1;
val1= 5 ?? 10
val1= null ?? 10
val1= undefined ?? 15
console.log(val1);//5

//Terniary Operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice>=80 ? console.log("more than 80") : 
console.log("less than 80");


