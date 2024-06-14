class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{//this extends access of user to teacher
    constructor(username, email, pass){
        super(username)//which allows to access inner properties of user
        this.email = email
        this.pass= pass
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai" , "Chai@gmail.com", "123")

chai.addCourses()
const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai instanceof user);//yeh jo chai
//hai vo user se aayi hai kya check karne ke liye 
//instance of use karte hai