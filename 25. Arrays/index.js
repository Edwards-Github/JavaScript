/*
array = a variable like structure that can hold
        more than 1 value
*/

let fruits = ["apple", "orange", "banana"];

// prints all the fruits in array
console.log(fruits);

// access first index
console.log(fruits[0]);

// adds "coconut" to end of array
fruits.push("coconut");

console.log(fruits);

// pops the last element
console.log(fruits.pop());

// adds fruit to beginning
fruits.unshift("mango");

// remove element from the beginning
fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(numOfFruits);
console.log(index);

// for loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// enhanced for loop
for(let fruit of fruits) {
    console.log(fruit);
}

// sort
fruits.sort();

// reverse sorted list
fruit.sort().reverse();