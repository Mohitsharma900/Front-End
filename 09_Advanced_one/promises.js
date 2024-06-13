const PromiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // Db calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async task 2 resolved');
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "Chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
}) 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: 'hitesh', password: '123'})
        } else {
            reject(' 4 Error : Something Went Wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
   console.log(user);
   return user.username
})
.then((username) => {
   console.log(username);
})
.catch(function(error){
   console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: 'JavaScript', password: '123'})
        } else {
            reject(' 5 Error : Js Went Wrong')
        }
    }, 1000)
})

/*

async function consumePromiseFive(){
    const response  = await promiseFive
    console.log(response);
}
    promise rejection is unhandled .. instead use try catch
*/

async function consumePromiseFive(){
    try {
        const response  = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();


async function getAllUsers(){
  try {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json() // adding await here is necessary
    console.log(data);//as conversion in json takes time

  } catch (error) {
    console.log("E: ",error);
  }
}

getAllUsers()


fetch("https://api.github.com/users/mohitsharma909")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((Error) => {
    console.log("E:",Error);
})