let select = document.getElementById("select");
let val = document.getElementById("val");
let inpval = document.getElementById("inpval");
let res = document.getElementById("res");
let inpres = document.getElementById("inpres");

function func() {
  if (select.value == "Weight") {
    val.innerHTML = "Kilogram";
    res.innerHTML = "Gram";
    inpval.value = "0";
    inpres.value = "0";
    inpval.addEventListener("input", convertFromKg);
  } else if (select.value == "Height") {
    val.innerHTML = "Foot";
    res.innerHTML = "Centimeter";
    inpval.value = "0";
    inpres.value = "0";
    inpval.addEventListener("input", convertFromFoot);
  } else if (select.value == "Length") {
    val.innerHTML = "Kilometer";
    res.innerHTML = "Meter";
    inpval.value = "0";
    inpres.value = "0";
    inpval.addEventListener("input", convertFromKM);
  } else {
    val.innerHTML = "Celsius";
    res.innerHTML = "Fahrenheit";
    inpval.value = "0";
    inpres.value = "0";
    inpval.addEventListener("input", convertFromCelsius);
  }
}

let convertFromKg = () => {
  let kg = inpval.value;
  //toFixed(2) limits the decimals to 2 digits.
  inpres.value = (kg * 1000).toFixed(2);
};

let convertFromFoot = () => {
  let ft = inpval.value;
  //toFixed(2) limits the decimals to 2 digits.
  inpres.value = (ft * 30.48).toFixed(2);
};

let convertFromKM = () => {
  let km = inpval.value;
  //toFixed(2) limits the decimals to 2 digits.
  inpres.value = (km * 1000).toFixed(2);
};

let convertFromCelsius = () => {
  let cel = inpval.value;
  inpres.value = ((cel * 9 / 5) + 32);
};