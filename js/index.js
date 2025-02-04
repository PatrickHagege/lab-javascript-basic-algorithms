// Iteration 1: Names and Input
// 
const hacker1 = "Patrick";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Hilana";

console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals

/***************************** 3.1 *****************************************/

// comparing strings with different return strings depending the result (should check string type inputs...)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

let upperHacker1 = hacker1.toUpperCase();
let separatedLetters = "";
// Iteration 3: Loops
for (let counter = 0; counter < upperHacker1.length; ++counter) {
    separatedLetters += upperHacker1[counter] + " ";
}
console.log(separatedLetters);

/***************************** 3.2 *****************************************/


// split -> create array / reverse array elements... / join -> array to string

const reversedHacker2 = hacker2.split("").reverse().join("");

console.log(reversedHacker2);

// Alternative way to do the same

let reversedHack2="";
for (let index = reversedHacker2.length-1; index >= 0; index--) {
    reversedHack2 += hacker2[index];
}
console.log(reversedHack2);

/***************************** 3.3 *****************************************/

let upperHacker2 = hacker2.toUpperCase();

// FIRST VERSION WITH JS STRING METHOD (LOCALECOMPARE)
/*
if (upperhacker1.localeCompare(upperHacker2) === -1) {
    console.log("The driver's name goes first.");
}   else if (upperhacker1.localeCompare(upperHacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
}   else   {
    console.log("What?! You both have the same name?");
}
*/

/***************************** 3.3 bis ***************************************/

// second version with direct comparisons

function stringCompare(a, b) {
    if (a < b) {
        console.log("The driver's name goes first.");
    } else if (a > b) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    };
}

stringCompare(upperHacker1, upperHacker2);

/**************************** BONUS 1 **************************************/

const sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at magna arcu. Donec at tellus vitae quam viverra tincidunt. Donec consectetur enim erat, non egestas ex consectetur in. Pellentesque quis enim fermentum, gravida tortor at, ullamcorper odio. Quisque malesuada arcu et orci consectetur, eget rutrum augue condimentum. Mauris sodales tellus molestie tellus ornare, sodales dignissim massa tristique. Duis semper, nunc vehicula posuere eleifend, metus metus viverra neque, ac molestie mauris neque sed nulla. Donec tincidunt nisi vitae est cursus porttitor. Fusce ut elementum augue. Phasellus in dictum ligula.

Cras nec quam risus. Ut id varius odio. Mauris efficitur mauris ac metus dapibus faucibus. Quisque sed scelerisque orci. Quisque porta, erat et hendrerit congue, nisi elit convallis tellus, ac eleifend sem ligula non sem. Cras vitae arcu tincidunt lectus fringilla elementum. Etiam quis scelerisque tellus, eget congue lacus. Quisque vel luctus nibh, et aliquet magna. Pellentesque mattis erat eget risus egestas facilisis.

Nullam porttitor leo et nisl blandit, sit amet consectetur lacus fringilla. Vivamus erat elit, sodales ac elementum eget, molestie sed velit. Ut nisl quam, auctor id cursus non, consequat sed ligula. Etiam nec felis magna. Nunc ullamcorper fringilla justo, ac commodo neque elementum quis. Donec quis gravida ligula. Vestibulum lectus orci, venenatis in ex vitae, malesuada maximus purus.`;

// should create functions for chaining, check string type and use replace with regex

const splittedSentence = sentence.split(' ');

for (let index = 0; index < splittedSentence.length; index++) {
    splittedSentence[index].replace('.', '');
}

for (let index = 0; index < splittedSentence.length; index++) {
    splittedSentence[index].replace(',', '');
}

// store the number of items inn array as words count

const count = splittedSentence.length;
console.log(count);

// counting number of "et" occurences

let increment = 0;
let numberOfEt = 0;

while (increment < splittedSentence.length)   {
    if (splittedSentence[increment] === "et") {
        numberOfEt++;
    }
    increment++;
}

console.log(numberOfEt);

/**************************** BONUS 2 **************************************/

const phraseToCheck = "No 'x' in Nixon";

function isPalindrome (phraseToCheck) {
    let index = 0;
    const onlyLetters = phraseToCheck.replace(/[^a-zA-Z]/g, '').toUpperCase();
    let lastIndex = onlyLetters.length-1;
    
    while (index < onlyLetters.length / 2) {
        if(onlyLetters[index] !== onlyLetters[lastIndex])   {
            return false;
        }
        index++;
        lastIndex--;
    }
    return true;
}

console.log(isPalindrome(phraseToCheck));