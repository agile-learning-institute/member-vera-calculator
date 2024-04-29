//global variables
let operator = '';
let previousValue = '';
let currentValue = '';

//storing all components
document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#clear-btn");
    let backButton = document.querySelector("#back-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click",function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousVaule + "" + operator;
        currentScreen.textContent = currentValue;
    }))

    //clear btn
    clear.addEventListener("click", function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    backButton.addEventListener("click", function() {
        currentValue = currentValue.slice(0, -1);
        currentScreen.textContent = currentValue;
    });

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
            calculate()
            previousScreen.textContent = '';
            if(previousValue.length <= 5){
                currentScreen.textContent = previousValue;
            }  else {
                currentScreen.textContent = previousValue.slice(0,5) +"...";
            }
        }
     })

     decimal.addEventListener("click", function() {
        addDecimal()
        })
    })

//html DOM Element textContent that will get the numbers 7, 8 9 and so on
    function handleNumber(num) {
    //will limit the length of the current value - up to 9 numbers
        if(currentValue.length <= 5){ 
            currentValue += num;
    }
}
//will get +, -, * and /
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+") {
        previousValue += currentValue;
        } else if(operator === "-") {
            previousValue -= currentValue;
        } else if(operator === "x") {
            previousValue *= currentValue;
        } else {
            previousValue /= currentValue;
        }
    
        previousValue = roundNumber(previousValue);
        previousValue = previousValue.toString();
        currentValue = previousValue.toString();
    }

    function roundNumber(num) {
        return Math.round(num * 1000) / 1000;
    }

    function addDecimal() {
        if(!currentValue.includes(".")) {
            currentValue += '.';
        }
    }

