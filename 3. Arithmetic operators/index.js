/* 
arithmetic operators = operands (values, variables, etc.)
                       operators (+ - * /)
                       ex. 11 = x + 5;
*/
let students = 30;
// students = students + 1; addition
// students = students - 1; subtraction
// students = students * 2; multiplication
// students = students / 2; division
// students = students ** 2; exponential
// students = students % 3; modulus

// augmented assignment operators
// students += 1; addition
// students -= 1; subtraction
// students *= 2; multiplication
// students **= 2;
// students %= 2; modulus

// increment
students++;
// decrement
students--;

console.log(students);

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);