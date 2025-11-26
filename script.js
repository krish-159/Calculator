let n1 = parseFloat(prompt("Enter no.1"));
while (Number.isNaN(n1)) {
    n1 = parseFloat(prompt("Invalid no. Enter no.1 again"));
}

let n2 = parseFloat(prompt("Enter no.2"));
while (Number.isNaN(n2)) {
    n2 = parseFloat(prompt("Invalid no. Enter no.2 again"));
}
let operator = prompt("Enter operator (+, -, *, /)");
let result;
if (operator === "+") {
    result = n1 + n2;
} else if (operator === "-") {
    result = n1 - n2;
} else if (operator === "*") {
    result = n1 * n2;
} else if (operator === "/") {
    result = n1 / n2;
} else if (operator === "%") {
    result = n1 % n2;
} else {
    alert("Invalid operator");
}
console.log(result);

alert(result)
