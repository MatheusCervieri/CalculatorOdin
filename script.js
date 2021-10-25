let displaystr = "";
const display = document.querySelector(".display");
let firstnumber = 0;
let secondnumber = 0;
let operator;
let result = 0;
let waitingforsecondoperand = false;

function add (a,b){
    return parseInt(a)+parseInt(b);
}
function sub (a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function divi(a,b){
    return a/b;
}
function operate(x, y, op) {
    if(op === 'sum') {
        console.log("sum");
        return add(x,y);
    } else if(op === '-') {
        return sub(x,y);
    } else if(op === '*') {
        return mult(x,y);
    } else if(op === '/') {
        if(y === 0) {
        return 'It is impossible';
        } else {
        return divi(x,y);
        }
    }
}

function makeDisplay (buttonid){
    if (waitingforsecondoperand == false){
        displaystr = displaystr + buttonid;
        }
        else {
        displaystr = "";
        displaystr = displaystr + buttonid;
        }
    
}


function buttonAction(buttonid){
    if(buttonid == 0){
        makeDisplay(buttonid);
    }
    if(buttonid == 1){
        makeDisplay(buttonid);
    }
    if(buttonid == 2){
        makeDisplay(buttonid);
    }
    if(buttonid == 3){
        makeDisplay(buttonid);
    if(buttonid == 4){
        makeDisplay(buttonid);
    }
    if(buttonid == 5){
        makeDisplay(buttonid);
    }
    if(buttonid == 6){
        makeDisplay(buttonid);
    }
    if(buttonid == 7){
        makeDisplay(buttonid);
    }
    if(buttonid == 8){
        makeDisplay(buttonid);
    }
    if(buttonid == 9){
        makeDisplay(buttonid);
    }
    if(buttonid == "sum"){
        if (waitingforsecondoperand == false){
        firstnumber = displaystr;
        displaystr = result;
        operator = "sum";
        waitingforsecondoperand = true;
        }
        else {
            secondnumber = displaystr;
            displaystr = "";
            operator = "sum";
            result = operate(firstnumber,secondnumber,operator);
            displaystr = result;
            firstnumber = result;
            waitingforsecondoperand = false;

        }
    }
    if(buttonid == "divi"){
        firstnumber = displaystr;
        displaystr = "";
        operator = "/";
    }
    if(buttonid == "-"){
        firstnumber = displaystr;
        displaystr = "";
        operator = "-";
    }
    if(buttonid == "mult"){
        firstnumber = displaystr;
        
        operator = "*";
    }
    
    if(buttonid == "equal"){
        secondnumber = displaystr;
        result = operate(firstnumber,secondnumber,operator);
        displaystr = result;
        firstnumber = displaystr;
    }
    if(buttonid == "ac"){
        firstnumber = 0;
        secondnumber = 0;
        displaystr = "0";
        waitingforsecondoperand = false;
    }
    console.log("..................................................." );
    console.log("First number: " + firstnumber);
    console.log("Second Number: " + secondnumber);
    console.log("DisplayString (DIsplayvalou): " + displaystr);
    console.log("Waitingforsecondoperand: " + waitingforsecondoperand);
    console.log("Result " + result);
    console.log("Operator " + operator);
    console.log("..................................................." );
    display.textContent = displaystr;
}
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    buttonAction(button.id);
  });
});
}



//problen: quando somar ele precisa somar o primeiro número com o segundo 

