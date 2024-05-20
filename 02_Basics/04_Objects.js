//constructor 
// const tinderUser = new Object()

//normal
const tinderUser = {};
tinderUser.id= "123abc";
tinderUser.name= "Sammy";
tinderUser.isLoggedIn= false;

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Mohit",
            lastName : "Sharma",
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName)

const obj_1 = {1: "A",2:"B"}
const obj_2 = {3: "C",4:"D"}
const obj_3 = {5: "E",6:"F"}

//const obj_4= {obj_1, obj_2, obj_3} this is not how you merge objects..
//use object assign method.

const obj_4 = Object.assign({}, obj_1, obj_2, obj_3)/* here
 the first value in parnthiesis is target object in 
 which further assistance objects are saved..*/
 console.log(obj_4)

 //however this is also the less used method 
 // go with spread operators simply..

const obj_5= {...obj_1, ...obj_2, ...obj_3};
console.log(obj_5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  /*
    this is used to destructure object and declare a
    name to keys which makes it easier to access ..
*/

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]