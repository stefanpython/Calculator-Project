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


// Loop through all buttons with class='digits' and store the value in userInput variable
let userInput = 0; // variable to keep track of initial user input 

    buttons.forEach((btn) => {
        btn.addEventListener('click', (btn) => {
            // Show user input on calculator display
            display.textContent += btn.target.value;

            // Store user string input in a variable and convert it to a number 
            userInput = display.textContent;
            userInput = parseInt(userInput)
            
            // Allow a number of a maximum of 15 digits
            if (display.textContent.length > 15) {
                display.textContent = display.textContent.slice(0, 15);
            }

        }) 
    })
    
