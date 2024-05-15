let score = "33abc";

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber);
//in case of null u will get 0 on conversion with this way..and in boolean value 0 & 1 
//and in undefined u will get nan;
// "33" => 33;
// "33abc" => NaN;
// true => 1;
// NUll => 0;
 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// While conversion You should always cross check the ans..

