// Selecting DOM elements
const tempCelsius = document.getElementById("temp-celsius");
const tempFahrenheit = document.getElementById("temp-fahrenheit");
const convertToFahrenheit = document.getElementById("convert-to-fahrenheit");
const convertToCelsius = document.getElementById("convert-to-celsius");

// Conversion functions
function celsiusToFahrenheit(temp) {
	return (temp * 9/5) + 32;
}

function fahrenheitToCelsius(temp) {
	return (temp - 32) * 5/9;
}

// Event listeners for conversion buttons
convertToFahrenheit.addEventListener("click", () => {
	if (tempCelsius.value) {
		tempFahrenheit.value = celsiusToFahrenheit(tempCelsius.value).toFixed(2);
	} else {
		alert("Please enter a temperature in Celsius");
	}
});

convertToCelsius.addEventListener("click", () => {
	if (tempFahrenheit.value) {
		tempCelsius.value = fahrenheitToCelsius(tempFahrenheit.value).toFixed(2);
	} else {
		alert("Please enter a temperature in Fahrenheit");
	}
});
