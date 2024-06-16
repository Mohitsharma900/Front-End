class user{
    constructor(username){
        this.username =  username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Mohit = new user("Mohit")
console.log(Mohit.createId())

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("iphone", "i@gmail.com")
Iphone.logMe()
console.log(Iphone.createId());