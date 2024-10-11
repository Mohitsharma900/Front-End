const user  = {
    username: "Mohit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }

}//literally a object

// console.log(user.username);
// console.log(user.getUserDetails());
function user2(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;

    return this;
}//this is a constructor function ...it usually returns ntg.

const userOne = new user2("Mohit", 5, true)
// if something is common which doesn't need a parameter for declaration pass it as prototype so that it doesn't take space every time you create an objeect 
// it will take reference from prototype everytime it is created rather creating a function each time for each object.
user2.prototype.Text = function (){
    console.log("Prototype single memory usage")
}
const userTwo = new user2("Kunal", 8, true)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
