let x = 0;
let y = 0;
let op = 0;
let signX = '+';
let signY = '+'
let displayValue = document.getElementById('display')

// listen for a button to be pressed
// add buttons to displayValue until operator is pressed
let calcNumber= document.querySelectorAll('.number');
calcNumber.forEach(num => {
    num.addEventListener('click', () => numberDisplay(num.innerHTML, signX, signY))
});


let operator = document.querySelectorAll('.operator');
operator.forEach(oper => {
    oper.addEventListener('click', () => {

        // if op already has a value, run operation first and assign value to x
        if (op !== 0) {
            y = displayValue.innerHTML;
            // run operate() and assign to x
            x = operate(op, x, y);
            displayValue.innerHTML = x;
        } else {
            x = displayValue.innerHTML;
            displayValue.innerHTML = 0;
        }


        // check which operator to assign to op
        if (oper.innerHTML === '+') {
            op = 'add';
        } else if (oper.innerHTML === '-') {
            op = 'subtract';
        } else if (oper.innerHTML === '*') {
            op = 'multiply';
        } else if (oper.innerHTML === '/') {
            op = 'divide';
        };

        console.log('x = ' + x);
        console.log(op)
    });
});

// listen for next buttons to be pressed
// add buttons to displayValue until = is pressed
// store displayValue in variable y when = is pressed
let equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    // if = pressed without y value, do not do anything
    if (x === 0 && y === 0) {
        return;
    } else {
        y = displayValue.innerHTML;

        // run operate() using values gathered in ^
        // store operate() return value in displayValue
        displayValue.innerHTML = operate(op, x, y);
    }
    console.log('y = ' + y);
});

// add functionality to decimal
// round answers, do not let decimal places overflow

// ??? add keyboard functionality ???

// change sign to + or - when +/- is pressed
let posNeg = document.getElementById('posNeg');
posNeg.addEventListener('click', () => {
    if (signX === '+' && op === 0) {
        signX = '-'
        if (displayValue.innerHTML.length === 1 && displayValue.innerHTML === '0') {
            displayValue.innerHTML = '-';
        } else {
            displayValue.innerHTML = '-' + displayValue.innerHTML;
        }
    } else if (signX === '-' && op === 0) {
        displayValue.innerHTML = displayValue.innerHTML.slice(1, displayValue.length);
        signX = '+';
    } else if (signY === '+' && op !== 0) {
        signY = '-'
        if (displayValue.innerHTML.length === 1 && displayValue.innerHTML === '0') {
            displayValue.innerHTML = '-';
        } else {
            displayValue.innerHTML = '-' + displayValue.innerHTML;
        }
    } else if (signY === '-' && op !== 0) {
        displayValue.innerHTML = displayValue.innerHTML.slice(1, displayValue.length);
        signY = '+';
    }
})

// when clear is pressed - make valuex x=0 y=0 op=''
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    x = 0;
    y = 0;
    op = 0;
    displayValue.innerHTML = 0;
});

// when delete is pressed - delete last digit added to displayValue
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, (displayValue.innerHTML.length - 1))
    if (displayValue.innerHTML.length === 0) {
        displayValue.innerHTML = 0;
    }
});

// display current values
function numberDisplay(num) {
    if (displayValue.innerHTML.length > 16) {
        return;
    } else {
        if (displayValue.innerHTML.length === 1 && displayValue.innerHTML === '0') {
        displayValue.innerHTML = num;
        } else {
            displayValue.innerHTML += num;
        }
    }
}

function operate(op, x, y) {
    x = parseInt(x);
    y = parseInt(y);

    if (op === 'add') {
        return add(x, y);
    } else if (op === 'subtract') {
        return subtract(x, y);
    } else if (op === 'multiply') {
        return multiply(x, y);
    } else if (op === 'divide') {
        if (y === 0){
            return "can't do that, nerd";
        } else if (y > 0) {
            return divide(x, y);
        }
    }
};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x /y;
};