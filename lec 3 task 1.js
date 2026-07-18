console.log("Start");
console.log("Middle");
console.log("End");
//----------------------------------------
function one() {
    console.log("1");
    two();
    console.log("3");
}

function two() {
    console.log("2");
}

one();
//----------------------------------------
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

let multiply = sum * 2;
console.log(multiply);

let subtract = multiply - 5;
console.log(subtract);  
//----------------------------------------
function number() {
    return 100;
}

function add() {
    let addition = number() + 25;
    return addition;
}

console.log(add());