/*
callback = a function that is passed as an argument
           to another function.

           used to handle asynchronous operations:
           1. Reading a file
           2. Network requests
           3. Interacting with databases

           "Hey, when you're done, call this next."
*/

// goodbye output runs first even when goodbye is after hello
// this is because hello is taking too long to finish running
// hello();
// goodbye();

// using callback syntax function(functionName); 
// NO PARENTHESES in the parameter or else it executes immediately
hello(goodbye);
hello(leave);
hello(wait);
sum(displayConsole, 1, 2);
sum(displayPage, 1, 2);

// function hello(){
//     console.log("Hello!");
// }

// function hello(){
//     setTimeout(function () {
//         console.log("Hello!");
//     }, 3000);
// }

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}