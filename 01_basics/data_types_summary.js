//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // give me false because two variables are pointing two different element towards...

// const bigNumber = 3456543576654356754n  // if we declare bigint then we have to put n in the last...



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "krish", "doga"];
let myObj = {
    name: "soumya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);