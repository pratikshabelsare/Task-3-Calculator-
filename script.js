const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (buttonValue >= '0' && buttonValue <= '9') {
      currentInput += buttonValue;
      display.value = currentInput;
    } else if (buttonValue === 'C') {
      clear();
    } else if (buttonValue === '=') {
      calculate();
    } else {
      if (currentInput !== '') {
        firstOperand = currentInput;
        operator = buttonValue;
        currentInput = '';
      }
    }
  });
});

function clear() {
  currentInput = '';
  firstOperand = '';
  operator = '';
  display.value = '';
}

function calculate() {
  let result = '';
  const secondOperand = currentInput;

  if (operator === '+') {
    result = parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === '-') {
    result = parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === '*') {
    result = parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === '/') {
    result = parseFloat(firstOperand) / parseFloat(secondOperand);
  }

  display.value = result;
  currentInput = result.toString();
}