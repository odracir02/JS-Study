"use strict";

console.log("---------------------- Exercise 1 ----------------------");
//todo: Check which string is longest
function CompararStr(string1, string2) {
  console.log(string1);
  console.log(string2);

  if (typeof string1 !== "string" || typeof string2 !== "string") {
    console.log("This is not the variable I'm looking for \n");
  } else {
    if (string1.length > string2.length) {
      return console.log(
        "String 1 is greater, it has: " + string1.length + " letters \n"
      );
    } else {
      return console.log(
        "String 2 is greater, it has: " + string2.length + " letters \n"
      );
    }
  }
}

CompararStr("Hello", "Good bye");
CompararStr("good bye", "Hello");
CompararStr(1, "siuuu");

console.log("---------------------- Exercise 2 ----------------------");
//todo: Loop multiplying the number
function Numbers(n1, n2) {
  console.log(n2);

  for (let i = 0; i <= n1; i++) {
    console.log((n2 = n2 * 2));
  }
}

Numbers(3, 2);

console.log("---------------------- Exercise 3 ----------------------");
//todo: Count letters in a text
function counter(text, character) {
  text = String(text);
  character = String(character);

  if (character.length == 1) {
    let numLetras = 0;
    for (let position = 0; position < text.length; position++) {
      if (text.charAt(position) == character) {
        numLetras += 1;
      }
    }
    console.log(character + " appear " + numLetras + " times in the text");
  } else {
    console.log("The character must be only one");
  }
}
counter("The process has failed successfully", "a"); // 8 times
counter("1 of 1 is 11 but 1 of 2 is 12", 1); //6 times

console.log("---------------------- Exercise 4 ----------------------");
//todo: Tax counter
function Ftax(Producto = "Generic product", price = 100, Tax = 21) {
  Producto = String(Producto);
  price = Number(price);
  Tax = Number(Tax);
  Tax = Tax / 100 + 1;

  if (Number.isNaN(price) || Number.isNaN(Tax)) {
    console.log("These are not the numbers you are looking for");
  } else {
    let lastPrice = price * Tax;
    console.log(Producto + " " + lastPrice);
  }
}

Ftax("Glass", 15, 21);
Ftax("House", "siu", 21);
Ftax("Ant", 0.01, 250);

console.log("---------------------- Exercise 5 ----------------------");

//Create an array
let Test = [1, 2, 3, 4];
console.log(Test + "\n");

//Concatenate 2 elements at start and end
Test.unshift(-1, 0);
Test.push(5, 6);
console.log(Test + "\n");

//Eliminate positions 3 to 5
Test.splice(3, 5);
console.log(Test + "\n");

//Print the array but separating with "==>"
console.log(Test.join(" ==> ") + "\n");

console.log("---------------------- Exercise 6 ----------------------");
//Grade point average
let media = (Name, ...punctuation) => {
  let max = punctuation.length;

  console.log(
    Name +
      " " +
      punctuation.reduce((total, punctuation) => total + punctuation, 0) / max
  );
};

media("Ricardo", 6, 6, 8, 9, 5, 7);
