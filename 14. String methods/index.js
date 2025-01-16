// string methods = allow you to manipulate and work with text (strings)

let userName = "BroCode";

// charAt
console.log(userName.charAt(1));

// indexOf
console.log(userName.indexOf("o"));

// lastIndexOf
console.log(userName.lastIndexOf("o"));

// length
console.log(userName.length);

let text = "test   "

// eliminate white space
console.log(text.trim());

// upper case
console.log(userName.toUpperCase());

// lower case
console.log(userName.toLowerCase());

// repeat a string
console.log(userName.repeat(3));

// check if string starts with something
console.log(userName.startsWith(" "));

// check if string includes something
console.log(text.includes(" "));

let phoneNumber = "123-456-7890";
// replaces character with another character
console.log(phoneNumber.replaceAll("-", ""));

// how many characters should the string be
// pad the start of the string with 0's till string is 15 characters long
console.log(phoneNumber.padStart(15, "0"));

// pad the end of the string with 0's till string is 15 characters long
console.log(phoneNumber.padEnd(15, "0"));
