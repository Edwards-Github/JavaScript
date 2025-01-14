/*
type conversion = change the datatype of a value to another
                  (strings, numbers, booleans)
*/

// the input is taken in as a string
let age = window.prompt("How old are you?");
// converts string to a number
age = Number(age);25
// since age is a number it can now be incremented
age += 1;

console.log(age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);