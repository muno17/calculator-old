let x = 0;
let y = 0;
let op = "";



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