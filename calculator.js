// --Part 1
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

// --Part 2
function calculate(a, b, operand) {
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


// --Part 3

// Select all buttons with class='digits'
const buttons = document.querySelectorAll('.digits');

// Select the display (user input display)
const display = document.querySelector('.user-input');


// variable to keep track of initial user input 
let userInput = 0; 

    // Loop through all buttons with class='digits' and store the value in userInput variable
buttons.forEach((btn) => {
    btn.addEventListener('click', (btn) => {

            // Show user input on calculator display
        display.textContent += btn.target.value;

            // Store user string input in a variable and convert it to a number 
        userInput = display.textContent;

        if (userInput.length > 15){
            userInput = display.textContent.slice(0, -1);
        }
         // Slice off the last 'hidden' character
        userInput = parseInt(userInput)
            
            // Allow a number of a maximum of 15 digits
        if (display.textContent.length > 15) {
            display.textContent = display.textContent.slice(0, 15);
        }
    }) 
})
    

    // -- Part 4
    
// Select all operator buttons
const operators = document.querySelectorAll(".operators");

let result = 0;
let operator = '';
let operatorID = '';
let total = 0;

operators.forEach((opr) => {
    opr.addEventListener("click", (opr) => {

        

        operatorValue = opr.target.value;
        operatorID = opr.target.id;
        console.log(operatorValue)

        if (operatorID === 'plus') {

            // Add total value to new user input each time + is pressed
            total += userInput;

            // If 'plus' button is pressed after userInput, calculate total value and clear display
            total = calculate(userInput, result, operatorValue)

            // Keep count of total in a variable named 'result'
            result = total;
            display.textContent = '';

        } else if (operatorID === 'equals') {

            // Add total value to new user input each time = is pressed
            total += userInput;

            // If equals is pressed, display the result from the operation aka 'total' to the screen
            display.textContent = total;
        }       
    })
})

