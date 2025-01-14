/* 
How to accept user input

1. EASY WAY = window prompt
2. PROFESSIONAL WAY = HTML textbox
*/

// 1. EASY WAY = window prompt
let username;

username = window.prompt("What's your username?")

console.log(username)

// 2. PROFESSIONAL WAY = HTML textbox
document.getElementById("mySubmit").onclick = function(){
    // Everything we'll do after clicking submit button
    username = document.getElementById("myText").value;
    console.log(username);
}

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}