function convertTemperature() { 
    const temperature = parseFloat(document.getElementById('temperature').value); 
    const fromUnit = document.getElementById('fromUnit').value; 
    const toUnit = document.getElementById('toUnit').value; 
    if (isNaN(temperature)) { 
        alert("Please enter a valid temperature."); 
        return; 
    } 
    let result; 
    // Convert from the input unit to Celsius first 
    if (fromUnit === 'celsius') { 
        result = temperature; 
    } else if (fromUnit === 'fahrenheit') { 
        result = (temperature - 32) * 5 / 9; 
    } else if (fromUnit === 'kelvin') { 
        result = temperature - 273.15;
            } 
    // Convert from Celsius to the output unit 
    if (toUnit === 'celsius') { 
        result = result; 
    } else if (toUnit === 'fahrenheit') { 
        result = (result * 9 / 5) + 32; 
    } else if (toUnit === 'kelvin') { 
        result = result + 273.15; 
    } 
    document.getElementById('result').innerText = result.toFixed(2); 
} 