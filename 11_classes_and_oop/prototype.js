let myName = "Mohit        "
let myChannel = "Plucky        "


console.log(myName.truelength);

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

//to declare a method you can declare function in a key's value

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Mohit = function(){
    console.log(`Mohit is present in all objects`);
}
/*
this is how you can create methods which 
are accessible to arrays and strings also
as they are directly added to objects and obj
is the grandfather.
*/

Array.prototype.heyMohit = function(){
    console.log(`hitesh says hello`);
}

heroPower.Mohit()
myHeros.heyMohit() 
// heroPower.heyMohit() 
/*functions objects & strings
  won't get access to this method*/

//inheritance

const user = {
    name : "Chai", 
    email : "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = user;

//modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher)
/* 
this is how one obj can access
the properties of another obj
this is prototypal inheritance 
this is how you can make one obj inherit the 
propertie of other objs.
*/ 

let anotherUsername = "ChaiAurCode        "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUsername.truelength()
"Mohit".truelength()