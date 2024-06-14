function multiplyBy5(num){
    return num*5
}

multiplyBy5.power  = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){ /* this is a constructor function ...i.e a template for 
creating objects 
*/
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){     // this is how you can create new methods in prototype
    this.score++
    console.log(this.score);
    
}
createUser.prototype.printMe= function(){
    console.log(`Price is ${this.score}`);
}


const chai = new createUser("chai", 25)
const tea  = new createUser("tea", 250)/* new keyword is compulsory..
 to declare it to the variable that function which you carried down has
  got some new properties(the one you declared above)
*/
chai.printMe()
chai.increment()


// this is the method I created

//constructor function
function createPassword(name,loginid, age ){
    this.name= name;
    this.loginid=loginid;
    this.age = parseInt(age);
    }
    
    //create a method
    // createPassword.prototype.generatePass=() => {
    //   console.log(this.pass);//I a am an idiot coz I forgot that "this" is not available in arrow fn
    // }
    createPassword.prototype.generatePass= function(){
      
      const password = `${this.age*Math.floor(Math.random()*200 + 1)}${this.name}`
      console.log(password);

    }
    
    //use method
    
    const newPass = new createPassword("Mohit","mohitbsharma909",15)
    newPass.generatePass()

/*

Here's what happens behind
the scenes when the "new" keyword is used:

A new object is created:  
The new keyword initiates the creation 
of a new JavaScript object.

A prototype is linked: 
The newly created object gets linked to 
the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: 
The constructor function is called with the 
specified arguments and this is bound to the 
newly created object. If no explicit return 
value is specified from the constructor, 
JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: 
After the constructor function has been called, 
if it doesn't return a non-primitive 
value (object, array, function, etc.), 
the newly created object is returned.

//article..

If I have a constructor function in JavaScript I want to be able to explicitly return something so that everything is clear when working in a team.

I read that if you use a function as a constructor in JS that if you return anything then using the new keyword will have been a wasted effort. But I am wondering if you can return this from the constructor function and be safe, for example:

function MyConstructor(val){

      this.val = val;
      return this;   //attention here

}

var example = new MyConstructor(val);
Does this yield the desired behavior?

answer:

Let's start with the normal behavior of JavaScript. If you do not return anything from a constructor function, it will work as expected (of course).

Hence

var Dog = function (name) {
  this.name = name;
};

var alice = new Dog('Alice');
results in a new object whose name property is set to Alice.

Now what happens if you try to override the implicit return statement of the constructor function by explicitly calling it?

Let's introduce a return statement that returns something else:

var Dog = function (name) {
  this.name = name;
  return 23;
};

var alice = new Dog('Alice');
Which value is alice now? Probably, you'd expect that it's 23, but actually it isn't. It still is an object with a name property set to Alice.

The problem here is that JavaScript is smarter than you: It sees your return, but realizes that the type of the thing you want to return does not match the fact that the function has been called using new. Hence the return is ignored.

Now what if we try to get smarter than JavaScript and return something whose type matches, i.e. an object?

var Dog = function (name) {
  this.name = name;
  return { foo: 'bar' };
};

var alice = new Dog('Alice');
In this case, JavaScript thinks that you have a good reason to override the implicit return and actually uses yours. This means that alice now points to an object with a foo property which is set to 'bar'.

So, to cut a long story short: If you explicitly call

return this;
you end up with the last case. You override the object that is implicitly being returned. But since the one you return is actually the same as the one that would have been returned implicitly, there is no difference.

So: Yes, it is the same, but the call to return this; is not required.

Some developers use this behavior to trick JavaScript into always returning a new object, no matter whether you call the constructor function with or without new:

var Dog = function (name) {
  return {
    name: name
  };
};

var alice1 = new Dog('Alice');
var alice2 = Dog('Alice');
Both calls result in a new object with a name property set to Alice, but there are some differences to the previous examples:

Both objects are just object literals, whose constructor property is not set to Dog, neither they use the expected prototype chain.
In the case with new actually two objects are being created: One by new, the other by you using the object literal syntax. This means more work for the garbage collector.
Hence, I think, that you should avoid this technique, and either use constructors correctly or stick to factory functions.

*/