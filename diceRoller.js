console.log("Start of the dice roller!");

// Simple dice roller function

function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize}-sized die...`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    // console.log(diceSide)
    return diceSide;
}

// Simple call, default parameter value used
rollDice();

// Overwriting the defalt parameter value
rollDice(diceSize = 10);

// or
rollDice(20);

// Specific dice roller function that calls the simple function
// Using function expression
const rollDice25 = function () {
    rollDice(25);
}

rollDice25();

// Using arrow function / Unanonymous function
const rollDice15 = () => {
    return rollDice(15);
}

// rollDice15();

let diceSide15 = rollDice15();
console.log("The side you rolled in this 15-sided die is: " + diceSide15);

// OPTIMISE

const rollDice8 = () => rollDice(8); // Condensed into single line of code, if we need more functionality, use {} ^
console.log("The side you rolled on the 8 sided die is " + rollDice8());