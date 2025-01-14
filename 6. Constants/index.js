// const = a variable that can't be changed

// capitalizing usually only done with primitive data types
const PI = 3.14159;
let radius;
let circumference;

// Reason we use const is because some variables should not be changed
// we don't want these values to be able to be changed in the code.
// pi = 420.69;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("myH3").textContent = circumference + "cm";
}

