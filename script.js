const field = document.querySelector('.field');
const resultNecessities = document.getElementById('result-necessities');
const resultWants = document.getElementById('result-wants');
const resultSavings = document.getElementById('result-savings');

field.addEventListener('input', updateResults);

function updateResults() {
  let inputValue = parseFloat(field.value.replace(/,/g, '')) || 0;

  // Check if input digit length is more than 15 digits
  if (inputValue.toString().length > 15) {
    resultNecessities.textContent = `₹0`;
    resultWants.textContent = `₹0`;
    resultSavings.textContent = `₹0`;
    alert('You exceeded the limit');
    return; 
  }

  const necessities = Math.floor(inputValue * 0.5).toLocaleString();
  const wants = Math.floor(inputValue * 0.3).toLocaleString();
  const savings = Math.floor(inputValue * 0.2).toLocaleString();

  resultNecessities.textContent = `₹${necessities}`;
  resultWants.textContent = `₹${wants}`;
  resultSavings.textContent = `₹${savings}`;
}
