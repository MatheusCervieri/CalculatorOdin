

const display = document.querySelector(".display");
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay (){
    let displayValuearray = calculator.displayValue.split('');

    if(displayValuearray.length <= 11){
        display.textContent = calculator.displayValue;
    }
    else {
        displayValuearray.pop();
        displayValuearray.pop();
        displayValuearray.push(".");
        display.textContent = displayValuearray.join("");
        calculator.displayValue = displayValuearray.join("");
        displayValuearray = [];
       // display.textContent = displayValuearray.join();
        
    }

    //converter o displayvalue para uma string.
    //checar se o tamanho da string é menor que 11>= se for executa normalmente. display.textContent = calculator.displayValue;
    // se não: remove os dois últimos valores da string e adiciona "."
    
}

function inputDigit (digit){
    if(calculator.waitingForSecondOperand == true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    }
    else {
        if(calculator.displayValue == "0"){
            calculator.displayValue = digit;
        }
        else {
            calculator.displayValue = calculator.displayValue + digit;
        }
    }
    
    
}

function handleOperator (operatora){
    const firstnumber = parseFloat(calculator.displayValue);
    

    if (calculator.operator && calculator.waitingForSecondOperand)  {
        calculator.operator = operatora;
        console.log(calculator);
        return;
      }
    if(calculator.firstOperand === null && !isNaN(firstnumber)){
        calculator.firstOperand = firstnumber;
    }
    else if (calculator.operator)
    {

        const result = calculate(calculator.firstOperand, firstnumber, calculator.operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
        
        
    }
   
  

    calculator.waitingForSecondOperand = true;
    calculator.operator = operatora;
    

}

function inputDecimal (dot){
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
      }
}

function calculate (firstOperand, secondOperand, Operator){

if(Operator == "sum"){
    return firstOperand + secondOperand;
}
if(Operator== "divi"){
    if(secondOperand != 0){
    return firstOperand/secondOperand;
    }
    else{
        console.log("error");
    return 'error';
    }
}
if(Operator == "-"){
    return firstOperand - secondOperand;
}
if(Operator == "mult"){
    return firstOperand*secondOperand;
}
if(Operator == "equal"){
    
}
if(Operator == "percent"){
    return 
}

return secondOperand;


}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
   
  }

updateDisplay();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    
    if (button.className == "number"){
    inputDigit(button.id);
    updateDisplay();
    }
    if(button.className == "dot"){
    inputDecimal(button.id);
    updateDisplay();
    }
    if(button.className == "operator"){
    handleOperator(button.id);
    updateDisplay();
    }
    if(button.className == "equal"){
    handleOperator(button.id);
    updateDisplay();
    }
    if(button.className == "ac"){
    resetCalculator();
    updateDisplay();
    }
  });
});

