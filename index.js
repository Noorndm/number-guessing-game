#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) User will input the number
// 3) Compare user input with computer generated number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you Guessed a right number.");
}
else {
    console.log("You Guessed a wrong number");
}
