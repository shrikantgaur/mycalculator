var valueDisplay = document.querySelector('.valueDisplay');
var clearButton = document.querySelector('.clear');
var actionButtons = document.querySelectorAll('.action-buttons button');
var buttons = document.querySelectorAll('.buttons button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var number = event.target.getAttribute('number');
        displayNumber(number);
    });
});

actionButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var sign = event.target.getAttribute('sign');
        if (sign != null && sign != undefined) {
            displayNumber(sign);
        }
    });
});

clearButton.addEventListener('click', function () {
    clearDisplayValue();
});

document.querySelector('.result').addEventListener('click', function () {
    calculateResult();
});

function displayNumber(number) {
    valueDisplay.value += number;
}

function clearDisplayValue() {
    valueDisplay.value = '';
}

function calculateResult() {
    var expression = valueDisplay.value;
    var result = evalExpression(expression);
    valueDisplay.value = result;
}

function evalExpression(expression) {
    try {
        return Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}