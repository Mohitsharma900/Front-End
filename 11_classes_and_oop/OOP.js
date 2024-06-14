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
}

const userOne = new user2("Mohit", 5, true)
const userTwo = new user2("Kunal", 8, true)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);