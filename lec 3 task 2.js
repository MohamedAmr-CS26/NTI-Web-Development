console.log("Hello");

function x(y) {
    console.log(y);
}

setTimeout(function () {
    x("World");
}, 2000);

//----------------------------------------


for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

//--------------------------



console.log("Loading...");

setTimeout(function () {
    console.log("Done");
}, 3000);

//--------------------------



function sendMessage(message, delay) {
    setTimeout(function () {
        console.log(message);
    }, delay);
}

sendMessage("Hello Mohamed", 1000);
sendMessage("How are you?", 2000);
sendMessage("Welcome to JavaScript Async!", 3000);