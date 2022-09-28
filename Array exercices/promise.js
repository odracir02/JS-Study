

let data = [
    {name: "Nacho", telefon: "966112233", age: 40},
    {name: "Ana", telefon: "911223344", age: 35},
    {name: "Mario", telefon: "611998877", age: 15},
    {name: "Laura", telefon: "633663366", age: 17}
];

//Promise add new person
let promiseNewPerson = new Promise((resolve,reject) => {
    let newPerson = person => {
        let exist = data.filter(pers => pers.telefon === person.telefon);
        if(exist.length == 0)
            resolve(datos.push(person));
        else
            reject("The person already exist");
            
    }
});

//Promise delete a person
let promiseDeletePerson = new Promise((resolve,reject)=>{
    let deletePerson = telefon => {
        if (data = data.filter(person => person.telefon != telefon)) {
            resolve("Deleted")
        }else{
            reject("Error the person does not exist")
        }
        
    }
});
