let x = 0;
let y = 0;
let op = 0;
let displayValue = document.getElementById('display')

// listen for a button to be pressed
// add buttons to displayValue until operator is pressed
let calcNumber= document.querySelectorAll('.number');
calcNumber.forEach(num => {
    num.addEventListener('click', () => numberDisplay(num.innerHTML))
});


let operator = document.querySelectorAll('.operator');
operator.forEach(oper => {
    oper.addEventListener('click', () => {
        x = displayValue.innerHTML;
        displayValue.innerHTML = 0;

        // check which operator to assign to op
        if (oper.innerHTML === '+') {
            op = 'add';
        } else if (oper.innerHTML === '-') {
            op = 'subtract';
        } else if (oper.innerHTML === '*') {
            op = 'multiply';
        } else if (oper.innerHTML === '/') {
            op = 'divide';
        }
        console.log(x);
        console.log(op)
    });
});

// listen for next buttons to be pressed
// add buttons to displayValue until = is pressed
// store displayValue in variable y when = is pressed
let equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    y = displayValue.innerHTML;

    // run operate() using values gathered in ^
    // store operate() return value in displayValue
    displayValue.innerHTML = operate(op, x, y);
    console.log(y);
});

// allow user to string multiple operations together, evaluate after each one

// round answers, do not let decimal places overflow

// if = pressed without y value, do not do anything

// ??? add keyboard functionality ???



// when clear is pressed - make valuex x=0 y=0 op=''
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    x = 0;
    y = 0;
    op = 0;
    displayValue.innerHTML = 0;
});

//when delete is pressed - delete last digit added to displayValue
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, (displayValue.innerHTML.length - 1))
    if (displayValue.innerHTML.length === 0) {
        displayValue.innerHTML = 0;
    }
});


function numberDisplay(num) {
    // *** need to find way to not allow more than 17 digits**** 
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