let palo = document.getElementById("palo");
let opciones = ["oros", "bastos", "copas", "espadas"];
let cadena = "";
for (let i=0; i < opciones.length; i++) {
	cadena += `<option>${opciones[i]}</option>`;
}
palo.innerHTML = cadena;

console.log(palo.value);
console.log(palo.selectedIndex);

let option = document.createElement("option");
option.setAttribute("value", "otro palo más");
option.text = "otro palo más";
palo.add(option);

palo.remove(palo.lenght-1);

let imgs = document.getElementsByTagName('img');

let plantilla = `declarando string
    de más de una línea`

let message = `Número de aciertos:  ${aciertos} 
    Número de fallos: ${fallos}
    No contestadas: ${c}`

    