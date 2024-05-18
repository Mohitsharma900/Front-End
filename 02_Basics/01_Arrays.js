//Arrays..


const myArr= [0, 1, 2, 3, 4, 5];
const myHeros= ["Shaktiman", "Naagraj"];
const myArr2= new Array(1,2,3,4);

console.log(myArr[2]);

myArr.push(6)//adds at last place
console.log(myArr);

myArr.pop();// del last place..
console.log(myArr);

myArr.unshift(9)//adds at start
console.log(myArr);

myArr.shift()//dels at start
console.log(myArr);

console.log(myArr.includes(20))
console.log(myArr.indexOf(9))//-1 coz it doesn't exists
//question asking methods..

const newArr= myArr.join();// converts to string..

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);//string

//Slice & Splice..

console.log("A", myArr)
const myn1 = myArr.slice(1,3) ;//doesn't changes the original array
console.log(myn1)
console.log("B", myArr);

const myn2= myArr.splice(1,3);/*removes the section which is spliced
 in this command..
 */
console.log("C",myArr);
console.log(myn2);



