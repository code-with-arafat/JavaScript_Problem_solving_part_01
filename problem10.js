//Convert Celsius to Fahrenheit

//Formula: °F = (°C × 9/5) + 32
const celsius = 42;
function celsiusToFahrenheit(c){
    const f = (c * 9/5) + 32
    return f;
}

const result = celsiusToFahrenheit(celsius);
console.log(celsius + "°C = "+ result + "°F");