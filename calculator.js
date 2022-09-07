function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b; 
}


function calculator(a, b, operand) {
    let output = 0;

    try {
        switch(operand) {
            case '+':
                output = add(a, b)
                break;
    
            case '-':
                output = substract(a, b)
                break;
            
            case '*':
                output = multiply(a, b)
                break;
    
            case '/':
                if(b === 0) {
                    throw "Can`t divide by 0!";
                } else {
                    output = divide(a, b);
                }
                break;
    
        }
    }
    catch(e) {
        console.log("There's an error: ", e)
      }
    return output;
}

// Select all buttons with class='digits'
const buttons = document.querySelectorAll('.digits');

// Select the display (user input display)
const display = document.querySelector('.user-input');

let userInput = '';

// Loop through all buttons with class='digits' and return value
buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
        userInput = parseInt(display.textContent += elem.value);
        return userInput;
    })
})