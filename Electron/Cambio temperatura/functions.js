let celsius = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");

let btnconvertir = document.getElementById("convertir");
let btnlimpiar = document.getElementById("limpiar");

btnlimpiar.addEventListener('click', ()=>{
    celsius.value="";
    kelvin.value = "";
});


document.getElementById("kelvin").disabled = true;
btnconvertir.addEventListener('click', () => {

        let valoKelvin = parseInt(celsius.value);
        kelvin.value = valoKelvin + 273.15;
});
