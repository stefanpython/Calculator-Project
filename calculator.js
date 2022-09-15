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
let newNum = '';

function operate() {
    
    let operator = '';
    newNum = display.textContent.split('');

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

    // Display error message if user tries to divide by 0;
    if (b === 0) {
        return display.textContent = 'LMAO'
    }else {
        result = calculate(a, b, operator);
    }
    
    
    if (display.textContent == 0) {
        display.textContent = '';
    }else {
        return display.textContent = Math.round(result * 100) / 100; // Add Math.round to prevent screen overflow for long decimals
    }
    
}


// Add clear button 
const clear = document.getElementById('delete');

clear.addEventListener('click', () => {
    decimal.disabled = false;
    display.textContent = '';
})


// Implement feature to add '.' 
const decimal = document.getElementById('dot');

let once = false;
decimal.addEventListener('click', () => {
    once = true;
    display.textContent += dot.value;

    // Disable . button if it`s already used once
    if (once === true) {
        decimal.disabled = true;
    }
})


// Add backspace feature when C button is clicked
const backSpace = document.getElementById('backspace');

backSpace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
})





function keyboardSuport(){
    document.addEventListener('keydown', (event) => {
        if (event.key == "0") {document.querySelector('#digit-0').click()}
        else if (event.key == "1") {document.querySelector('#digit-1').click()}
        else if (event.key == "2") {document.querySelector('#digit-2').click()}
        else if (event.key == "3") {document.querySelector('#digit-3').click()}
        else if (event.key == "4") {document.querySelector('#digit-4').click()}
        else if (event.key == "5") {document.querySelector('#digit-5').click()}
        else if (event.key == "6") {document.querySelector('#digit-6').click()}
        else if(event.key == "7") {document.querySelector('#digit-7').click()}
        else if(event.key == "8") {document.querySelector('#digit-8').click()}
        else if(event.key == "9") {document.querySelector('#digit-9').click()}
        else if(event.key == "+") {document.querySelector('#plus').click()}
        else if(event.key == "-") {document.querySelector('#minus').click()}
        else if(event.key == "*") {document.querySelector('#multiply').click()}
        else if(event.key == "/") {document.querySelector('#divide').click()}
        else if(event.key == "Enter") {document.querySelector('#equals').click()}
        else if(event.key == '.') {document.querySelector('#dot').click()}
        else if(event.key == 'Backspace') {document.querySelector('#backspace').click()}
        else if(event.key == 'Delete') {document.querySelector('#delete').click()}
    
        if (display.textContent.length > 15) {
            display.textContent = display.textContent.slice(0, 15);
        }
    });
}

keyboardSuport();