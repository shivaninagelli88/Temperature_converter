const toFahrenheitButton = document.getElementById("toFahrenheit");
const toCelsiusButton = document.getElementById("toCelsius");
const resultElement = document.getElementById("result");

toFahrenheitButton.addEventListener("click", convertToCelsius);
toCelsiusButton.addEventListener("click", convertToFahrenheit);

function convertToCelsius() {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const result = (celsiusInput * 9/5) + 32;
    resultElement.textContent = `${celsiusInput} Celsius = ${result.toFixed(2)} Fahrenheit`;
}

function convertToFahrenheit() {
    const fahrenheitInput = parseFloat(document.getElementById("celsius").value);
    const result = (fahrenheitInput - 32) * 5/9;
    resultElement.textContent = `${fahrenheitInput} Fahrenheit = ${result.toFixed(2)} Celsius`;
}