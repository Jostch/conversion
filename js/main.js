
function conversion() {
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    var result = document.querySelector("div.result");

    if (celsius.value) {
        fahrenheit.value = celsius.value * 9/5 + 32;
        result.innerHTML = celsius.value + " °C => " + fahrenheit.value + " °F";
    }
    setTimeout(conversion, 1000);
}
conversion();