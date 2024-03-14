// Step 1: Function Declaration
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const add1 = parseInt(document.getElementById('add1').value);
    const add2 = parseInt(document.getElementById('add2').value);
    document.getElementById('sum').value = add(add1, add2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

// Step 2: Function Expression
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const subtract1 = parseInt(document.getElementById('subtract1').value);
    const subtract2 = parseInt(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(subtract1, subtract2);
};

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Step 3: Arrow Functions
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = parseInt(document.getElementById('factor1').value);
    const factor2 = parseInt(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 4: Your Choice
function divide(number1, number2) {
    return number1 / number2;
}

const divideNumbers = () => {
    const dividend = parseInt(document.getElementById('dividend').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
};

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Step 5: Selection Structures
document.getElementById('getTotal').addEventListener('click', () => {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    const total = isMember ? subtotal * 0.8 : subtotal;
    document.getElementById('total').textContent = total.toFixed(2);
});

// Step 6: Array Methods - Functional Programming
const numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);

document.getElementById('array').textContent = numbersArray.join(', ');

const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(', ');

const evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

const multiplied = numbersArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multiplied.join(', ');

const sumOfMultiplied = multiplied.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;


