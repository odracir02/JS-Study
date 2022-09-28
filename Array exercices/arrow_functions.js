

let data = [
    {name: "Nacho", telefon: "966112233", age: 40},
    {name: "Ana", telefon: "911223344", age: 35},
    {name: "Mario", telefon: "611998877", age: 15},
    {name: "Laura", telefon: "633663366", age: 17}
];

//Add new person
let newPerson = person => {
    let exist = data.filter(pers => pers.telefon === person.telefon);
    if(exist.length == 0)
        data.push(person);
}

//delete a person
let deletePerson = telefon => {
    data = data.filter(person => person.telefon != telefon);
}

//call the function
newPerson({nombre: "Juan", telefono:"965661564", edad: 60});
newPerson({nombre: "Rodolfo", telefono:"910011001", edad: 20});

//Now we delete Rodolfo
deletePerson("910011001");

//And print
console.log(data)