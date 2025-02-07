console.log("me coding!")


let num1 = parseFloat(prompt("enter the number"));
let operator = prompt("enter the operator: +,-,*,/");
let num2 = parseFloat(prompt("enter the number"));
if (operator === "+") console.log(num1 + num2);
else if (operator === "-") console.log(num1 - num2);
else if (operator === "*") console.log(num1 * num2);
else if (operator === "/") console.log(num1 / num2);
else console.log("invalid operator");
