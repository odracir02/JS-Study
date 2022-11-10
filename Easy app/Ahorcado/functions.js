const fs=require('fs')

let palabra = document.getElementById("palabra")
let letra = document.getElementById("letra")
let guiones = document.getElementById("guiones")
let btnDelete = document.getElementById("btnDelete");

//Creamos el boton de borrar los campos
btnDelete.addEventListener('click',() =>{
    palabra.value = '';
    letra.value = '';
    guiones.value = '';
});


