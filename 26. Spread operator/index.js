/* 
spread operator = ... allows an iterable such as an
                  array or string to be expanded
                  into seperate elements
                  (unpacks the elements)
*/
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);

console.log(maximum);

let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);