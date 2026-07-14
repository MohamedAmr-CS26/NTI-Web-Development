// Input
let text = "hello world";
let searchWord = "world";

// Assume the word is not found
let foundIndex = -1;

// ----------------------------------
// Search for the first occurrence
// ----------------------------------
for (let i = 0; i <= text.length - searchWord.length; i++) {

    let isMatch = true;

    // ----------------------------------
    // Compare characters one by one
    // ----------------------------------
    for (let j = 0; j < searchWord.length; j++) {

        if (text[i + j] !== searchWord[j]) {
            isMatch = false;
            break;
        }

    }

    // ----------------------------------
    // Store the index if a match is found
    // ----------------------------------
    if (isMatch) {
        foundIndex = i;
        break;
    }

}

// ----------------------------------
// Display result
// ----------------------------------
console.log("Index:", foundIndex);