let x = 0;
let y = 0;
let op = 0;
let signX = '+';
let signY = '+';

// display current values
let displayValue = document.getElementById('main');
let displaySolution = document.getElementById('solution');

// listen for a button to be pressed
// add buttons to displayValue until operator is pressed
let calcNumber= document.querySelectorAll('.number');

calcNumber.forEach(num => {
    num.addEventListener('click', () => numberDisplay(num.innerHTML, signX, signY))
});

function numberDisplay(num) {
    if (displayValue.innerHTML.length > 25) {
        return;
    } else {
        if (displayValue.innerHTML.length === 1 && displayValue.innerHTML === '0') {
        displayValue.innerHTML = num;
        } else {
            
            displayValue.innerHTML += num;
            console.log('x value in num display = ' + x)
        }
    }
};

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
        displayValue.innerHTML = displayValue.innerHTML + ' = ';
        displaySolution.innerHTML = operate(op, x, y);
    }
});


// assign operator, run operate() if operator already exists
let operator = document.querySelectorAll('.operator');
operator.forEach(oper => {
    oper.addEventListener('click', () => {
        console.log('x going into operator = ' + x)
        // if op already has a value, run operation first and assign value to x
        if (op !== 0) {
            y = displayValue.innerHTML;
            // run operate() and assign to x
            displayValue.innerHTML = operate(op, x, y) + ' = ';
            x = displayValue.innerHTML;
            console.log('y val is = ' + y)
            displaySolution.innerHTML = x;
        } else {
            x = displayValue.innerHTML;
            displayValue.innerHTML = 0;
        }
        console.log('x value in middle of operator = ' + x)
        // check which operator to assign to op
        if (oper.innerHTML === '+') {
            
            console.log('x value going out of operator = ' + x);
            op = 'add';
            displayValue.innerHTML = displayValue.innerHTML + ' + '
        } else if (oper.innerHTML === '-') {
            op = 'subtract';
            displayValue.innerHTML = displayValue.innerHTML + ' - '
        } else if (oper.innerHTML === '*') {
            op = 'multiply';
            displayValue.innerHTML = displayValue.innerHTML + ' * '
        } else if (oper.innerHTML === '/') {
            op = 'divide';
            displayValue.innerHTML = displayValue.innerHTML + ' / '
        };
    });
});


// change sign to + or - when +/- is pressed
let posNeg = document.getElementById('posNeg');
posNeg.addEventListener('click', () => {
    if (signX === '+' && op === 0) {
        signX = '-';
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
    };
});

// when clear is pressed - make valuex x=0 y=0 op=''
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    x = 0;
    y = 0;
    op = 0;
    displayValue.innerHTML = 0;
    displaySolution.innerHTML = '';
});

// when delete is pressed - delete last digit added to displayValue
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, (displayValue.innerHTML.length - 1))
    if (displayValue.innerHTML.length === 0) {
        displayValue.innerHTML = 0;
    };
});


function operate(op, x, y) {
    console.log('x value going into operate = ' + x)
    console.log('y value going into operate = ' + y)
    x = parseFloat(x);
    z = 0;


    if (op === 'add') {
        let addArr = displayValue.innerHTML.split('+')
        let y = parseFloat(addArr[1]); 
        console.log('x value going out of operate() = ' + x);
        console.log('y value going out of operate() = ' + y);
        z = add(x, y);
    } else if (op === 'subtract') {
        z = subtract(x, y);
    } else if (op === 'multiply') {
        z = multiply(x, y);
    } else if (op === 'divide') {
        if (y === 0){
            return "can't do that, nerd";
        } else if (y > 0) {
            z = divide(x, y);
        }
    };

    // round decimals to not allow overflow
    if (z.toString().length > 14) {
        return z.toFixed(19);
    } else {
        return z;
    };
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