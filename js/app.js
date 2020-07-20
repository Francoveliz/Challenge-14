const toggleSwitch = document.querySelector(
  '.selector-switch input[type="checkbox"]'
);
const basicPrice = document.getElementById("basicPrice");
const professionalPrice = document.getElementById("professionalPrice");
const masterPrice = document.getElementById("masterPrice");

function switchTheme(e) {
  if (e.target.checked) {
    basicPrice.innerHTML = "$199.99";
    professionalPrice.innerHTML = "$249.99";
    masterPrice.innerHTML = "$399.99";
  } else {
    basicPrice.innerHTML = "$19.99";
    professionalPrice.innerHTML = "$24.99";
    masterPrice.innerHTML = "$39.99";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);