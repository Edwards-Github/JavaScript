/*
function = A section of reusable code.
           Declare code once, use it whenever you want.
           Call the function to execute that code.
*/

// function definition
function happyBirthday(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!");
}

// calling function
happyBirthday();

// function definition
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}

// calling function
happyBirthday("BroCode", 25);

function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);