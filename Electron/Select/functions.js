let palo = document.getElementById("palo");
let opciones = ["oros", "bastos", "copas", "espadas"];
let cadena = "";
for (let i=0; i < opciones.length; i++) {
	cadena += `<option>${opciones[i]}</option>`;
}
palo.innerHTML = cadena;

//Comprobar cual esta seleccionado en el radio button
let ra=document.getElementById("radio1");
if(ra.checked)
console.log(ra.value);

//Comprobar si esta seleccionado en el checkButton
let c=document.getElementById("c1");
if(c.checked)
console.log(c.value);