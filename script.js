let x = 0;
let y = 0;
let op = "";

let displayValue = document.getElementById('display')
let calcButton = document.querySelector('.calcButton').addEventListener('click', buttonOp())


function buttonOp(b) {
    if (b)
}

function operate(op, x, y) {
    return op(x, y);
}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x /y;
}