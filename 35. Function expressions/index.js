/*
function declaration = define a reusable block of code
                       that performs a specific task
*/

/*
function expressions = a way to define functions as
                       values or variables
*/

// passing a whole function as a parameter
setTimeout(function(){
    console.log("Hello");
}, 3000);


const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(square);
// function square(element){
//     return Math.pow(element, 2);
// }

// We can also do
const squares = numbers.map(function(element){ 
    return Math.pow(element, 2); 
});

console.log(squares);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNums);