const date = new Date();

// Date(year, month, day, hour, minute, second, ms)
const firstDate = new Date(2024, 0, 1, 2, 3, 4);
console.log(date);
console.log(firstDate);

const secondDate = new Date("2024-01-02T12:00:00Z")
console.log(secondDate);

// gives the date of 1.7 billion milliseconds
const thirdDate = new Date(1700000000);
console.log(thirdDate);

const fourthDate = new Date();

const year = fourthDate.getFullYear();
const month = fourthDate.getMonth();
const day = fourthDate.getDay();
const hour = fourthDate.getHours();
const minutes = fourthDate.getMinutes();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(dayOfWeek);
console.log(fourthDate);

const fifthDate = new Date();

fifthDate.setFullYear(2024);
fifthDate.setMonth(0);
fifthDate.setDate(1);
fifthDate.setHours(2);
fifthDate.setMinutes(3);
fifthDate.setSeconds(4);

console.log(fifthDate);

// compare dates
const date1 = new Date("2023-12-31");
const date2 = new Date("2023-12-30");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}