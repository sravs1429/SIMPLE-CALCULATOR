let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    currentInput += op;
    updateDisplay();
}

function clearEntry() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').textContent = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        currentInput = '';
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
