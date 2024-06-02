// for loop

for (let i = 0; i < 10; i++) {
    const element= i;
    
    if (element==5) {
        console.log("5 is the best number.");
    }

    console.log(element);
}

for (let i = 15; i <= 30; i++) {
    console.log(`Outer loop value ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i}*${j}=${i*j}`);
    }
}


let myArr = ["flash", "batman", "superman"];
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}

// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log(`5 detected`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }


for (let i = 0; i <= 10; i++) {
    if (i==5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}