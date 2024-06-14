//call and this in js 
// call transfers the current this context from one 
// constructor obj to another

function setUsername(username){
    //complex db calls aa jayegi
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this , username)

    this.email = email
    this.password = password
}

const chai = new createUser('chai', "chai@fb", "123")
console.log(chai);