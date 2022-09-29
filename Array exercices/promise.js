//console.log("---------------------- Exercise 1 ----------------------");
//Promise with array

let data = [
  { name: "Nacho", telefon: "966112233", age: 40 },
  { name: "Ana", telefon: "911223344", age: 35 },
  { name: "Mario", telefon: "611998877", age: 15 },
  { name: "Laura", telefon: "633663366", age: 17 },
];

//Promise add new person
let promiseNewPerson = new Promise((resolve, reject) => {
  let newPerson = (person) => {
    let exist = data.filter((pers) => pers.telefon === person.telefon);
    if (exist.length == 0) resolve(datos.push(person));
    else reject("The person already exist");
  };
});

//Promise delete a person
let promiseDeletePerson = new Promise((resolve, reject) => {
  let deletePerson = (telefon) => {
    if ((data = data.filter((person) => person.telefon != telefon))) {
      resolve("Deleted");
    } else {
      reject("Error the person does not exist");
    }
  };
});

//console.log("---------------------- Exercise 2 ----------------------");
//heads or tails

let headstails = new Promise((resolve, reject) => {
  n = Math.floor(Math.random() * 2);
  if (n == 0) {
    resolve("heads");
  } else {
    reject("Tails");
  }
});

headstails
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//console.log("---------------------- Exercise 3 ----------------------");
//disco bouncer

let promiseDiscoBouncer = new Promise((resolve, reject) => {
  bAge = Math.floor(Math.random() * 32);
  if (bAge < 18) {
    resolve("You cant get in");
  } else {
    reject("Ok");
  }
});

promiseDiscoBouncer
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//console.log("---------------------- Exercise 4 ----------------------");
//Number comparer

let promiseCompareNumbers = new Promise((resolve, reject) => {
  n1 = Math.floor(Math.random() * 10);
  n2 = Math.floor(Math.random() * 10);
  if (n1 == n2) {
    resolve(n1 + " and " + n2 + " are equal");
  } else {
    reject(n1 + " and " + n2 + " are different");
  }
});

promiseCompareNumbers
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
