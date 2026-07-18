console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 1000);

console.log("End");

//--------------------------


console.log("A");

setTimeout(function () {
    console.log("B");
}, 0);

console.log("C");

//--------------------------


console.log("Line 1");

setTimeout(function () {
    console.log("Async Task");
}, 2000);

console.log("Line 2");
console.log("Line 3");

//--------------------------



console.log("Program Started");

setTimeout(function () {
    console.log("Async Operation");
}, 0);

function processData() {
    console.log("Processing Data...");
}

processData();

console.log("Program Finished");