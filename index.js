const textbox = document.getElementById("textbox");
const tocelsius = document.getElementById("tocelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const toKelvin = document.getElementById("tokelvin");
const toKelvin1 = document.getElementById("toKelvin1");
const toKelvin2 = document.getElementById("toKelvin2");
const toKelvin3 = document.getElementById("toKelvin3");
const myp = document.getElementById("myp");
let temp;

function convert() {
  if (tocelsius.checked) {
    temp = textbox.value;
    temp = (temp * 9) / 5 + 32;
    myp.textContent = temp + "°F";
  } else if (toFahrenheit.checked) {
    temp = textbox.value;
    temp = ((temp - 32) * 5) / 9;
    myp.textContent = temp + "°C";
  } else if (toKelvin.checked) {
    temp = Number(textbox.value);
    temp = temp + 273.15;
    myp.textContent = temp + "K";
  } else if (toKelvin1.checked) {
    temp = Number(textbox.value);
    temp = temp - 273.15;
    myp.textContent = temp + "°C";
  } else if (toKelvin2.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9 + 273.15;
    myp.textContent = temp + "K";
  } else if (toKelvin3.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 273.15) * 9) / 5 + 32;
    myp.textContent = temp + "°F";
  } else {
    myp.textContent = "Select a Unit";
  }
}
