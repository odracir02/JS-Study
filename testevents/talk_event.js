const events = require('events')
class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let manu = new Person("Manu");
let boris = new Person("Boris");
let people = [manu, boris];

people.forEach(function (littperson) {
  littperson.on("talk", function (message) {
    console.log(littperson.name + "Has said" + message);
  });
});

manu.emit("hablar", "I hope you like my js files");
manu.emit("hablar", "Siuu");
