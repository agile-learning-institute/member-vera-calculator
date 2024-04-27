//global variables
let operator = '';
let previousValue = '';
let currentValue = '';

//storing all components
document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#clear-btn");
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
})
    operators.forEach((op) => op.addEventListener("click", function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousVaule + "" + operator;
        currentScreen.textContent = currentValue;
    }))

//html DOM Element textContent that will get the numbers 7, 8 9 and so on
function handleNumber(num) {
    //will limit the length of the current value
    if(currentValue.length <= 5){ 
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}