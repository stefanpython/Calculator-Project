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