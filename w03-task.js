// Addition
document.getElementById("add_numbers").addEventListener("click", function() {
    var add1 = parseFloat(document.getElementById("add1").value);
    var add2 = parseFloat(document.getElementById("add2").value);
    var sum = add1 + add2;
    document.getElementById("sum").value = sum;
});

// Subtraction
document.getElementById("subtract_numbers").addEventListener("click", function() {
    var subtract1 = parseFloat(document.getElementById("subtract1").value);
    var subtract2 = parseFloat(document.getElementById("subtract2").value);
    var difference = subtract1 - subtract2;
    document.getElementById("difference").value = difference;
});

// Multiplication
document.getElementById("multiply_numbers").addEventListener("click", function() {
    var factor1 = parseFloat(document.getElementById("factor1").value);
    var factor2 = parseFloat(document.getElementById("factor2").value);
    var product = factor1 * factor2;
    document.getElementById("product").value = product;
});

// Division
document.getElementById("divide_numbers").addEventListener("click", function() {
    var dividend = parseFloat(document.getElementById("dividend").value);
    var divisor = parseFloat(document.getElementById("divisor").value);
    var quotient = dividend / divisor;
    document.getElementById("quotient").value = quotient;
});

// Get Total Due
document.getElementById("get_total").addEventListener("click", function() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var memberDiscount = document.getElementById("member_status").checked ? 0.9 : 1; // Apply 10% discount for members
    var total = subtotal * memberDiscount;
    document.getElementById("total").textContent = "$ " + total.toFixed(2);
});

// Array Methods
var sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("array").textContent = sourceArray.join(", ");
var oddNumbers = sourceArray.filter(function(num) {
    return num % 2 !== 0;
}).join(", ");
document.getElementById("odds").textContent = oddNumbers;
var evenNumbers = sourceArray.filter(function(num) {
    return num % 2 === 0;
}).join(", ");
document.getElementById("evens").textContent = evenNumbers;
var sumOfArray = sourceArray.reduce(function(acc, val) {
    return acc + val;
}, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;
var multipliedArray = sourceArray.map(function(num) {
    return num * 2;
}).join(", ");
document.getElementById("multiplied").textContent = multipliedArray;
var sumOfMultipliedArray = sourceArray.map(function(num) {
    return num * 2;
}).reduce(function(acc, val) {
    return acc + val;
}, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedArray;



