//asignar campo de texto a una variable
let texto = documento.getElementById("texto");

let button = document.getElementById("boton");
button.addEventListener('click',()=>{
    alert(texto.value);
});

//evento del campo de texto
//texto.addEventListener('click',()=>{
//    alert("Click en campo de texto!");
//});
let muestra =  document.getElementById("muestra");
texto.addEventListener('keyup', (evento) => {
    if  (evento.key == "Enter") {
        //alert("Enter!");
        muestra.innerHTML=texto.value;
    }
});