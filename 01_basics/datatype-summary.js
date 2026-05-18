//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Preimitive)
 let myYoutubeName = "chandu@youtube"
 
 let myAnotherYoutubeName = myYoutubeName
 console.log(myYoutubeName);
 console.log(myAnotherYoutubeName);
 
 myAnotherYoutubeName = "anotherchandu@youtube"
 console.log(myAnotherYoutubeName);

let userOne = {
    emailId : "chandu@gmail",
    upi : "chadu@ybl"
}

let userTwo = userOne

console.log(userOne.upi);
console.log(userTwo.upi);

userTwo.upi = "shekhar@ybl"
console.log(userOne.upi);
console.log(userTwo.upi);