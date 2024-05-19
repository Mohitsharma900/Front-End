    //objects

    /*singleton: literal se declare hoga to singleton nahi banega.. 
    constructor(Object.create) se declare hoga to singleton banega*/

    // Object literals

    const jsUser= {
        name: "Mohit",
        "full name": "Mohit B Sharma",
        age :  20,
        Goal: "Google",
        email: "mohitsharma909@gmail.com",
        isLoggedIn: false,
        lastLoggedInDays: ["Monday", "Saturday"]
    }

    console.log(jsUser.email);
    console.log(jsUser["email"])/*use "" for accessing keys
    coz "str"  method is also used for declaring keys many times.*/
    // console.log(jsUser.full name); won't work;
    console.log(jsUser["full name"]);

    //declaring symbols

    const mySym= Symbol("Key1")
 
    const jsUser_1= {
        name: "Mohit",
        "full name": "Mohit B Sharma",
        age :  20,
       // mysym: "myKey1",//won't work as a symbol it will work as a string..
        [mySym]: "myKey1",//now this will work as a symbol..
       Goal: "Google",
        email: "mohitsharma909@gmail.com",
        isLoggedIn: false,
        lastLoggedInDays: ["Monday", "Saturday"]
    };

    console.log(jsUser_1[mySym])

    //This is how you can change value for the keys;

    jsUser.email = "Mohit_sharma_909@gmail.com";
    console.log(jsUser.email)

    console.log(jsUser_1);
    
    // you can also freeze the objects to prevent any further changes..
    Object.freeze(jsUser);

    // declare functions..

    jsUser_1.greetings= function(){
        console.log(`Hello Js User ${this.name}`)/*this helps to 
        access the key value pairs of the object you are working on..*/
    }

    console.log(jsUser_1.greetings());




