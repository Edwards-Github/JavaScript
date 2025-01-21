/**
 * setTimeout() = function in JavaScript that allows you to schedule
 *                the execution of a function after an amount of time (milliseconds)
 *                Times are approximate (varies based on the workload of the JavaScript runtime env.)
 * 
 *                setTimeout(callback, delay);
 */

function sayHello(){
    window.alert("Hello");
}

// setTimeout(callback, delay)
setTimeout(sayHello, 3000); // execute sayHello function after 3000 ms or 3 seconds