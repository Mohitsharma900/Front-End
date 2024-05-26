// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a,b,c); normal

{} //scope 

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    //console.log("Inner a:",a)
}
// console.log(a);not defined
// console.log(b);not defined
//console.log(c);//is accesible out of scope


let a = 300;//this a is accessible;
//global scope while ran through node is different 
//global sccope in console is diferent..

function one(){
    const userName= "Mohit";

    function two(){
        const Website= "Youtube";
        console.log(userName)
    }

    two()
    // console.log(Website);
}

one();
if(true){
    const userName= "Mohit";
    if (userName==="Mohit"){
        const Website= " Youtube";
        console.log(userName+Website);
    }
    // console.log(Website);
}

// console.log(userName);

// ++++++++++++++++ interesting ++++++++++++++++++

function addone(num){
    return num + 1
}
addone(5)


const addTwo = function(num){ //expression
    return num + 2
}//cannot access before initialisation.. 

addTwo(5);
