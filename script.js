// script.js
const form = document.getElementById('sumForm');
const resultDiv = document.getElementById('result');
const sumElement = document.getElementById('sum');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    const sum = num1 + num2;
    sumElement.textContent = sum;
    resultDiv.style.display = 'block'; // Show the result div
});
