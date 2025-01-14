/* 
ternary operator = a shortcut to if{} and else{} statements
                   helps to assign a variable based on a condition
                   condition ? codeIfTrue : codeIfFalse;
*/

let age = 21;
// This replaces the bottom if and else condition
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let isStudent = true;
let msg = isStudent ? "You are a student" : "You are NOT a student";
console.log(msg);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
/*
if(age >= 18){
    message = "you're an adult";
}
else{
    message = "you're a minor"
}
*/