let n1 = parseFloat(prompt("Enter no."));
while (Number.isNaN(n1)) {
    n1 = parseFloat(prompt("Invalid no. Enter no. again"));
}

let n2 = parseFloat(prompt("Enter no."));
while (Number.isNaN(n2)) {
    n2 = parseFloat(prompt("Invalid no. Enter no. again"));
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