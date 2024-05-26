const user= {
    userName: "Mohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website.`)
        console.log(this)
    }

}

/*'This' refers to the current context you are
 working in....*/

// user.welcomeMessage()
// user.userName= "Sam";
// user.welcomeMessage()

console.log(this)/*in node there is no global
scope which gives it no  current context but
in console in browser it will show you window

WINDOW IS THE GLOBAL OBJECT IN BROWSER...

*/

// function chai(){
//     let userName= "Mohit"
//     console.log(this)
//     //console.log(this.userName) Won't work in fn.
//     //works in object..
// }

// chai()

//const chai =  function () {
    //     let userName= "Mohit"
    //     console.log(this)
    //     //console.log(this.userName) Won't work in fn.
    //     //works in object..
    // }

// chai()

//arrow function held in  a variable

const chai= () => {
    let userName = "Mohit"
    console.log(this)
    console.log(this.userName)
    /*both the above logs are going to give 
     empty objects*/
}

chai()

const addTwo = (num1,num2) => {
    return num1 + num2;
}

console.log(addTwo(58,56));

//can be done in implicit returned way
//without return keyword in one line...
const addThree = (num1, num2) => num1 + num2
console.log(addThree(568, 3647));

/* return object using implicit has just a 
  little catch u have to use {curly braces}
  to declare object but if you use it than 
  have to go with return keyword so we use 
  {curly braces} nested in ({parantheisis})
const addThree = (num1, num2) => ({name:"abc"}) */ 


/* regular functions have their own global scope
   they have their own this context unlike arrow
   function which capture their this value from
   the surrounding lexical context*/

