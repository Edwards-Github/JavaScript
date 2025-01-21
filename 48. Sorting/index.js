/**
 * sort() = method used to sort elements of an array in place.
 *          Sorts elements as strings in lexicographic order, not alphabetical
 *          lexicographic = (alphabet + numbers + symbols) as strings
 */

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

fruits.sort();
numbers.sort();

console.log(fruits);
console.log(numbers); // numbers is not sorted for numbers we need a custom comparator 

// ascending order
numbers.sort((a, b) => a - b);
console.log(numbers);

// descending order
numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

// sort by age (ascending)
people.sort((a,b) => a.age - b.age);
console.log(people);
// sort by age (descending)
people.sort((a,b) => b.age - a.age);
console.log(people);
// sort by GPA
people.sort((a,b) => a.gpa - b.gpa);
console.log(people);

people.sort((a,b) => a.name - b.name); // name isn't in sorted order
console.log(people);

// localeCompare will compare name in lexicographical order
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// reverse the order
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);