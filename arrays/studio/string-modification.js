const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The string ${str} in pseudo-pig latin is ${newStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = Number(input.question("enter number of letters "));
newStr = str.slice(numOfLetters) + str.slice(0,numOfLetters);
console.log(newStr);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetters > str.length) {
    console.log(`the number ${numOfLetters} is too long for word ${str}`);
} else {
    newStr = str.slice(numOfLetters) + str.slice(0,numOfLetters);
    console.log(newStr);
}