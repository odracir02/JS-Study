console.log("Going into utilities.js");

//function
let addition = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;

let newPerson = (vector,person) => {
  let exist = data.filter((pers) => pers.telefon === person.telefon);
  if (exist.length == 0) 
  data.push(person);
};

let deletePerson = (telefon) => {
  data = data.filter((person) => person.telefon != telefon);
};

module.exports = {
  addition: addition,
  subtract: subtract,
  newPerson: newPerson,
  deletePerson: deletePerson,
};
