/**
 * closure = A function defined inside of another function,
 *           the inner function has access to the variables
 *           and scope of the outer function.
 *           Allow for private variables and state maintenance
 *           Used frequently in JS frameworks: React, Vue, Angular
 */

function outer(){
    
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    
    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

// maintains state of count
counter.increment(); // count = 1
counter.increment(); // count = 2
counter.increment(); // count = 3
counter.increment(); // count = 4

console.log(`The current count is ${counter.getCount()}`);

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }
    
    // returns object with {}
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);