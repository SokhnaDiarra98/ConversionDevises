const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const amount = parseFloat(document.querySelector('#amount').value);
	const currencyFrom = document.querySelector('#currency-from').value;
	const currencyTo = document.querySelector('#currency-to').value;

	const rate = getExchangeRate(currencyFrom, currencyTo);
	const convertedAmount = amount * rate;

	result.textContent = `${amount.toFixed(2)} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`;
});

function getExchangeRate(from, to) {
	// Replace this with actual exchange rate API call
	return 550;
}