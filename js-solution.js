// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsious){
    let Fahrenheit = (celsious*1.8)+32;
    return Fahrenheit;
}
const result = celsiusToFahrenheit(10);
console.log(result);