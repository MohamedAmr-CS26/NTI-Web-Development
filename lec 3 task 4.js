
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function afterGreeting() {
    console.log("Welcome!");
}

greet("Mohamed", afterGreeting);

//--------------------------


function calculator(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log(result);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiply);

//--------------------------


function loadData(callback) {
    console.log("Loading Data...");

    setTimeout(function () {
        console.log("Data Loaded");
        callback();
    }, 2000);
}

function afterLoading() {
    console.log("Processing Data...");
}

loadData(afterLoading);

//--------------------------

function login(username, callback) {
    console.log("Checking credentials...");

    setTimeout(function () {
        console.log("Login Successful");
        callback();
    }, 2000);
}

function nextStep() {
    console.log("Redirecting to Dashboard...");
}

login("Mohamed", nextStep);