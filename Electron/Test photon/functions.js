let mDiv = document.getElementById("data");
let ADiv = document.getElementById("Array");
mDiv.innerHTML = "<p> Hello array </p>";
ADiv.innerHTML = "";

//Create button
let button = document.createElement("button");
button.textContent = "Open window";
document.body.appendChild(button);

//handle button click event:
button.addEventListener('click',()=>{
    ADiv.innerHTML = "test";
    })

    let aName = ["Ricardo", "Alvaro", "Onse","Leven"];
    s += aName[i] + "<br>";