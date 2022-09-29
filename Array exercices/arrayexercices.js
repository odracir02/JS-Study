// Voy a editar esto, para subir el nuevo cambio

//console.log("---------------------- Exercise 1 ----------------------");
//Create the array
let Adata = [
  { name: "Nacho", telefon: "966112233", age: 40 },
  { name: "Ana", telefon: "911223344", age: 35 },
  { name: "Mario", telefon: "611998877", age: 15 },
  { name: "Laura", telefon: "633663366", age: 17 },
];

//console.log("---------------------- Exercise 2 ----------------------");
//add two lines at the end
Adata.push({ name: "Pedro", telefon: "611944444", age: 25 });
Adata.push({ name: "Julia", telefon: "633232323", age: 37 });

console.log("---------------------- Exercise 3 ----------------------");
//print the array
console.log(Adata);

console.log("---------------------- Exercise 4 ----------------------");
//We sort by age
Adata.sort((a, b) => {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }
  return 0;
});

console.log(Adata);

console.log("---------------------- Exercise 5 ----------------------");
//We sort by name
Adata.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
});

console.log(Adata);

console.log("---------------------- Exercise 6 ----------------------");

let older = Adata.filter((person) => person.age >= 30);
console.log("Older than 30");
console.log(older);
