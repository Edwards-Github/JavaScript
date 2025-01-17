/* 
variable scope = where a variable is recognized
                 and accessible (local vs global)
*/

// Global variable
let x = 3;

function2();

// function function1(){
//     let x = 1;
//     console.log(x);
// }

// function function2(){
//     let x = 2;
//     console.log(x);
// }

function function2(){
    // There are two variable x's:
    // Prioritizes local first then global
    let x = 2;
    console.log(x);
}