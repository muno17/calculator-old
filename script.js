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
            if (x > 0) {
                displayValue.innerHTML = x;
            } else {
                displayValue.innerHTML = num;
            }
        } else {
            displayValue.innerHTML += num;
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
        //displaySolution.innerHTML = operate(op, x, y);
        let solution = operate(op, x, y).toString().split('=');
        displaySolution.innerHTML = solution[0]; 
    }
});


// assign operator, run operate() if operator already exists
let operator = document.querySelectorAll('.operator');
operator.forEach(oper => {
    oper.addEventListener('click', () => {

        // if op already has a value, run operation first and assign value to x
        if (op !== 0) {
            y = displayValue.innerHTML;
            // run operate() and assign to x
            displayValue.innerHTML = operate(op, x, y);
            x = displayValue.innerHTML;
            //console.log('y val is = ' + y)
            let solution = x.split('=');
            displaySolution.innerHTML = solution[0];
        } else {
            x = displayValue.innerHTML;
            displayValue.innerHTML = 0;
        }
        // check which operator to assign to op
        if (oper.innerHTML === '+') {
            op = 'add';
            displayValue.innerHTML = x + ' + '
        } else if (oper.innerHTML === '-') {
            op = 'subtract';
            displayValue.innerHTML = x + ' - '
        } else if (oper.innerHTML === '*') {
            op = 'multiply';
            displayValue.innerHTML = x + ' * '
        } else if (oper.innerHTML === '/') {
            op = 'divide';
            displayValue.innerHTML = x + ' / '
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
    x = parseFloat(x);
    z = 0;

    if (op === 'add') {
        let addArr = displayValue.innerHTML.split('+')
        let y = parseFloat(addArr[1]); 
        z = add(x, y);
    } else if (op === 'subtract') {
        let subArr = displayValue.innerHTML.split('-')
        let y = parseFloat(subArr[1]); 
        z = subtract(x, y);
    } else if (op === 'multiply') {
        let multArr = displayValue.innerHTML.split('*')
        let y = parseFloat(multArr[1]); 
        z = multiply(x, y);
    } else if (op === 'divide') {
        let divArr = displayValue.innerHTML.split('/')
        let y = parseFloat(divArr[1]); 
        if (y === 0){
            return "can't do that, nerd";
        } else if (y > 0) {
            z = divide(x, y);
        }
    };

    // round decimals to not allow overflow
    if (z.toString().length > 25) {
        return z.toFixed(25);
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