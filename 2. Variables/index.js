/* 
variable = A container that stores a value.
           Behaves as if it were the value it contains.

1. declaration      let x;
2. assignment       x = 100;
*/

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

// formatting
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);

// displaying data type of variable
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
// prints number

let firstName = "Bro";
console.log(firstName);
console.log(typeof firstName);
// prints string
console.log(`Your first name is ${firstName}`);

let favoriteFood = 'sushi';
console.log(`you like ${favoriteFood}`);

let email = "Bro@gmail.com";
console.log(`your email is ${email}`);

// Booleans
let online = false;
let forSale = true;
let isStudent = true;

console.log(`Bro is online ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "Edward";
let myAge = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${myAge} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;
