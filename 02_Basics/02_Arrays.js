const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc = ["Batman", "Superman","Flash"];

marvel_heros.push(dc);/*it won't concatinate it will 
take dc arr just as another data in it */
console.log(marvel_heros);

/* to access data in dc you have to use */
console.log(marvel_heros[3][1]);


//concat
const marvel_heros1 = ["thor", "Ironman", "Spiderman"];
const dc1 = ["Batman", "Superman","Flash"];
let newArr=marvel_heros1.concat(dc1);//this is the right 
// way to concat the arrays..and it creates new array it
// doesn't make change in original array.. 
console.log(newArr);


//Spread Operator
const all_new_heros= [...marvel_heros, ...dc]
console.log(all_new_heros)
//this is the most frequently used way to concatinate arrays..

const another_array= [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);

//importing data from web pages can be in any format so check and convert

console.log(Array.isArray("Mohit"));
console.log(Array.from("Mohit"))
console.log(Array.from({name: "Mohit"}));//gives empty array

let score_1 = 100;
let score_2 = 200;
let score_3 = 300;

console.log(Array.of(score_1, score_2, score_3))



