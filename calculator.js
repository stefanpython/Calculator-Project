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

function displayValue() {

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
   
}

displayValue();
   
    

    // -- Part 4
    
// Select all operator buttons
const operators = document.querySelectorAll(".operators");

let count = 0;
let operatorValue = '';

function operatorType () {

    operators.forEach((opr) => {
        opr.addEventListener("click", (opr) => {
            
            operatorValue = opr.target.value;
            display.textContent += operatorValue;
            count++;

            display.textContent = display.textContent;
            console.log(operatorValue);
            console.log(display.textContent);
            
            if (count > 1) {
                operate();
                display.textContent += operatorValue;  
                
                // Implement corect result when pressing '='
                if (operatorValue === '=') {
                   let equalValue = display.textContent.slice(0, -1);
                   display.textContent = equalValue;
                   count = 0;
                } 

                
            }
            
        })
        
    })

    return operatorValue;
    
}

operatorType();


let result = 0;

function operate() {
    
    let operator = '';
    let newNum = display.textContent.split('');

    // Extract operator value and save it to a variable
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] === '+') {
            operator = '+'; 
        } else if (newNum[i] === '-') {
            operator = '-';
        } else if (newNum[i] === '/') {
            operator = '/';
        } else if (newNum[i] === '*') {
            operator = '*';   
        } else if (newNum[i] === '=') {
            operator = '=';
            
        }
    }
     
    let a = Number(newNum.join('').split(operator)[0]);
    let b = Number(newNum.join('').split(operator)[1]);

    // Add negative numbers
    if (newNum[0] === '-'){
        a = -Number(newNum.join('').split(operator)[1]);
        b = Number(newNum.join('').split(operator)[2]);
    }

    // Implement corect result when pressing '='
    if (operator === '=') {
        let arr = newNum.slice(0, -1);
        for (let foo = 0; foo < arr.length; foo++){
            if (arr[foo] === '+') {
                operator = '+'; 
            } else if (arr[foo] === '-') {
                operator = '-';
            } else if (arr[foo] === '/') {
                operator = '/';
            } else if (arr[foo] === '*') {
                operator = '*';   
        }
    }
    a = Number(arr.join('').split(operator)[0]);
    b = Number(arr.join('').split(operator)[1]);

    if (newNum[0] === '-' && operator == newNum[0]){
        a = -Number(arr.join('').split(operator)[1]);
        b = Number(arr.join('').split(operator)[2]);
        }

    }
   
    // Loop for doing operation with different operators one after the other
    let last = newNum[newNum.length - 1];
    if (last === '-' || last === '+' || last === '*' || last === '/') {
        let bar = newNum.slice(0, -1);
        for (let j = 0; j < bar.length; j++) {
            if (bar[j] === '+') {
                operator = '+'; 
            } else if (bar[j] === '-') {
                operator = '-';
            } else if (bar[j]=== '/') {
                operator = '/';
            } else if (bar[j] === '*') {
                operator = '*';   
        }
        }
        a = Number(bar.join('').split(operator)[0]);
        b = Number(bar.join('').split(operator)[1]);
    }

    result = calculate(a, b, operator);
    
    if (display.textContent == 0) {
        display.textContent = '';
    }else {
        return display.textContent = Math.round(result * 100) / 100; // Add Math.round to prevent screen overflow for long decimals
    }
    

}

