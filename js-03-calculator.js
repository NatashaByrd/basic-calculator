// function that is called whenever any button is clicked on the calculator
var num1, num2 = 0;
// pass the input box to JS as an Obj
var numInput = document.getElementById('numInput');
var result = "";
var myOp = ""; // store the op (+, -, *..)
var calcOutput = document.getElementById('calcOutput');

function calculate(op) {
    // first, identify op
    if(op != 'clear' && op != '=') { // op is +, -, *, / etc
        myOp = op; // store the operator (+, -, *..)
        num1 = numInput.value; // 1st number entered
        calcOutput.innerHTML = `${num1} ${myOp}`;
    // user did NOT click equal sign
    } else if(op == '=') { 
        // to be continued
    } else { // user clicked Clear, so reset Global vars
       num1 = 0;
       num2 = 0;
       numInput.value = "";
       result = "";
    } // end if-else block
} // close function calculate(op)

// SOLUTION
function calculate(op) {
   
    if(op != "=" && op != "clear") { // if op is an operator
        num1 = numInput.value;  // store first number
        myOp = op; // save operator for later use to do math
        // output what you have so far: num1 and operator
        calcOutput.innerHTML = `${num1} ${myOp}`;
        numInput.value = ""; // clear input box
    } else if(op == "=") {  // if Equals button calls function
        num2 = numInput.value; // second number
        // myOP is a string, so won't work without eval()
        result = eval(num1 + myOp + num2);
        calcOutput.innerHTML = num1 + " " + oper + " " + num2 + " = " + result;  // output  
        numInput.value = ""; // clear input box
    } else {  // if Clear button calls function
        numInput.value = "";
        calcOutput.innerHTML = "";
        num1 = 0;
        num2 = 0;
    }
    
} // calculate(op)
