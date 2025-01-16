/* 
  = assignment operator
 == comparison operator (compare if values are equal)
=== strict equality operator (compare if values & datatype are equal)
 != inequality operator
!== strict inequality operator
*/

const PI = 3.14;

if(PI == "3.14"){ // true
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

if(PI === "3.14"){ // false, not the same data type
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

if(PI === 3.14){ // true
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

if(PI != "3.14"){ // false
    console.log("That is NOT Pi");
}
else{
    console.log("This is Pi");
}

if(PI !== "3.14"){ // true
    console.log("That is NOT Pi");
}
else{
    console.log("This is Pi");
}

if(PI !== 3.14){ // true
    console.log("That is NOT Pi");
}
else{
    console.log("This is Pi");
}