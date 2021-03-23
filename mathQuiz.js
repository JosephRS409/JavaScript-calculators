
/* Defining Table
 * Input: Child enters a number, an arithmetic operator, and another number
 * Processing: Crunches the operands based on given operator
 * Output: "Correct" or "Incorrect" based on user entry
 parseFloat(*/
// Make 4 inputs from users
// Separate by operator (+ - * /)
//
/*
Test Cases
Input	Output
7 + 3  10	Correct! Good job!
7.5 - 3  5	Incorrect! Try again!
5 * 3  15	Correct! Good job!
10 / 2.5  6	Incorrect! Try again!
*/
// DO NOT INCLUDE SCRIPT TAG FOR JS FILE!!!
function mathFunction() {
    let numberOne = parseFloat(document.getElementById("firstOperand").value); // Operand is the number being operated upon
    let operator = (document.getElementById("operator").value); // Operator does things with the number
    let number2 = parseFloat(document.getElementById("secondOperand").value);
    let answer = parseFloat(document.getElementById("answer").value);

    let output = "";
    switch (operator) { // operator is the test variable
        case "-":
            if (numberOne - number2 == answer) {
                output = "Correct! Good job!";
            }
            else {
                output = "Incorrect! Try again!"
            }
            break;
        case "+":
            if (numberOne + number2 == answer) {
                output = "Correct! Good job!";
            }
            else {
                output = "Incorrect! Try again!"
            }
            break;
        case "/":
            if (numberOne / number2 == answer) {
                output = "Correct! Good job!";
            }
            else {
                output = "Incorrect! Try again!"
            }
            break;
        case "*":
            if (numberOne * number2 == answer) {
                output = "Correct! Good job!";
            }
            else {
                output = "Incorrect! Try again!"
            }
            break;
        // more cases
        default:
            output = "Incorrect! Make an operator. ";
            break;
    }
    document.getElementById('output').innerHTML = output;
}
