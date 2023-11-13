let history = [];
let currentExpression = '';

function updateDisplay() {
  document.getElementById('display').textContent = currentExpression;
}

function updateHistory() {
  const historyElement = document.getElementById('history');
  historyElement.innerHTML = '';

  for (let i = 0; i < history.length; i++) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `<span>${i + 1}. ${history[i]}</span>`;

    const separator = document.createElement('div');
    separator.className = 'separator';

    historyElement.appendChild(historyItem);
    historyElement.appendChild(separator);
  }
}

function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.dataset.value;

  if (buttonValue === '=') {
    try {
      const result = eval(currentExpression);
      history.push(`${currentExpression} = ${result}`);
      currentExpression = result;
      updateHistory();
    } catch (error) {
      currentExpression = 'Error';
    }
  } else if (buttonValue === 'C') {
    currentExpression = '';
  } else {
    currentExpression += buttonValue;
  }

  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  updateDisplay();
});
