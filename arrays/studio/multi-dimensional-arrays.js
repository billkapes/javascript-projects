let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet0 = food.split(' ').sort();
let cabinet1 = equipment.split(' ').sort();
let cabinet2 = pets.split(',').sort();
let cabinet3 = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet0, cabinet1, cabinet2, cabinet3];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let answer = input.question("select cabinet number 0 - 3 ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(cargoHold[answer]);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetNumber = Number(input.question("enter cabinet number "));
let item = input.question("enter item ");
if (cargoHold[cabinetNumber].includes(item)) {
    console.log(`Cabinet ${cabinetNumber} DOES contain ${item}.`);
} else {
    console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${item}.`);
    
}