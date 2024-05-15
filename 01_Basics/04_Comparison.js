// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*
   while using comparison operators null and undefined are treated as 0 because they are converted to number..
   and while using equating operators "==" they are treated as they are empty value and undefined value...
*/

// === checks value strictly by checking data types without converting into a number..

console.log("2" === 2);