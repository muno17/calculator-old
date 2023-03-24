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
        console.log(x);

        // listen for next buttons to be pressed
        // add buttons to displayValue until = is pressed
        // store displayValue in variable y when = is pressed
        let equals = document.getElementById('equals');
        equals.addEventListener('click', () => {
            y = displayValue.innerHTML;
        });

        // run operator
        if (oper.innerHTML === '+') {
            op = add(x, y);
        } else if (oper.innerHTML === '-') {
            op = subtract(x, y);
        } else if (oper.innerHTML === '*') {
            op = multiply(x, y);
        } else if (oper.innerHTML === '/') {
            op = divide(x, y);
        }

        displayValue.innerHTML = op;
    })
})



// run operate() using values gathered in ^
// store operate() return value in displayValue

// when clear is pressed - make valuex x=0 y=0 op=''
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    x = 0;
    y = 0;
    op = '';
    displayValue.innerHTML = 0;
})

//when delete is pressed - delete last digit added to displayValue
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, (displayValue.innerHTML.length - 1))
    if (displayValue.innerHTML.length === 0) {
        displayValue.innerHTML = 0;
    }
})


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




// let one = document.getElementById('1');
// one.addEventListener('click', () => numberDisplay(one.innerHTML))

// let two = document.getElementById('2');
// two.addEventListener('click', () => numberDisplay(two.innerHTML))

// let three = document.getElementById('3');
// three.addEventListener('click', () => numberDisplay(three.innerHTML))

// let four = document.getElementById('4');
// four.addEventListener('click', () => numberDisplay(four.innerHTML))

// let five= document.getElementById('5');
// five.addEventListener('click', () => numberDisplay(five.innerHTML))

// let six = document.getElementById('6');
// six.addEventListener('click', () => numberDisplay(six.innerHTML))

// let seven = document.getElementById('7');
// seven.addEventListener('click', () => numberDisplay(seven.innerHTML))

// let eight = document.getElementById('8');
// eight.addEventListener('click', () => numberDisplay(eight.innerHTML))

// let nine = document.getElementById('9');
// nine.addEventListener('click', () => numberDisplay(nine.innerHTML))

// let zero = document.getElementById('0');
// zero.addEventListener('click', () => numberDisplay(zero.innerHTML))