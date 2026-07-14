// Input
let brackets = "({[]})";

// Stack to store opening brackets
let stack = [];

// Assume the string is valid unless proven otherwise
let isValid = true;

// ----------------------------------
// Check each character in the string
// ----------------------------------
for (let i = 0; i < brackets.length; i++) {

    let current = brackets[i];

    // ----------------------------------
    // If it's an opening bracket
    // ----------------------------------
    if (
        current === "(" ||
        current === "[" ||
        current === "{"
    ) {

        stack.push(current);

    } else {

        // ----------------------------------
        // Get the last opening bracket
        // ----------------------------------
        let last = stack.pop();

        // ----------------------------------
        // Check if brackets match
        // ----------------------------------
        if (
            (current === ")" && last !== "(") ||
            (current === "]" && last !== "[") ||
            (current === "}" && last !== "{")
        ) {

            isValid = false;
            break;

        }
    }
}

// ----------------------------------
// Check for unclosed brackets
// ----------------------------------
if (stack.length !== 0) {
    isValid = false;
}

// ----------------------------------
// Display result
// ----------------------------------
if (isValid) {
    console.log("Valid");
} else {
    console.log("Invalid");
}