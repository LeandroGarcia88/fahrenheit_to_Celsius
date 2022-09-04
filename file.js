
let output = document.getElementById("output");
let input = document.getElementById("input");
let button = document.querySelector("#button");

button.addEventListener("click", convertCelsius, false)
;
let fahrenheit = 0;




function convertCelsius(){
  
  let fahrenheit = parseInt(input.value);
  let celsius = ((fahrenheit - 32) * 5)/9;
  celsius = celsius.toFixed(2);

  output.innerHTML = `Grau Fahrenheit: ${fahrenheit} <br>
  Grau Celsius: ${celsius}`;
}