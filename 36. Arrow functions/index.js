/*
arrow functions = a concise way to write function expressions
                  good for simple functions that you use only once
                  (parameters) => some code
*/

// const hello = (name) => console.log(`Hello ${name}`);

// If more than 1 line need to enclose with {}
const hello = (name, age) => {console.log(`Hello ${name}`)
                         console.log(`You are ${age} years old`)};

hello("Edward", "32");

// setTimeout(callback, 3000);

// function hello(){
//     console.log("Hello");
// }

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

setTimeout( () => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) =>  Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);