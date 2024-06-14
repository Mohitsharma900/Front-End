// ES6

class user{
    constructor(username, id, pass){
        this.username = username
        this.id = id
        this.pass = pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }

    Changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai@gmail.com", "123" )
console.log(chai.encryptPassword());
console.log(chai.Changeusername());

//behind the scene

function user_1(username, id, pass){
    this.username = username
    this.id = id
    this.pass = pass
}

user_1.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}
user_1.prototype.Changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user_1("tea","Tea@gmail.com", "123" )

console.log(tea.Changeusername());
console.log(tea.encryptPassword())