// Part 1: Error - Assignment to constant variable
let userName = "Moroni"; // Changed const to let
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// Part 2: Error - DateTime is not defined
const currentDateAndTime = Date(); // Changed DateTime to Date
console.log(`It is now ${currentDateAndTime}`);

// Part 3: Error - Incorrect loop usage in the total function
let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) { // Changed for...in to for...of
        sum += aNumber;
    }
    return sum;
}

