function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function copyAnswer() {
    const answer = document.getElementById('display').value;
    navigator.clipboard.writeText(answer)
        .then(() => alert('Answer copied to clipboard'))
        .catch(err => console.error('Unable to copy text', err));
}

function calculateFromInput() {
    const userInput = document.getElementById('userInput').value;
    try {
        const result = eval(userInput);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
