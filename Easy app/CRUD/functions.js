// load fs module
const fs = require("fs");
// read clients from file
let file = fs.readFileSync("./clientes.json");
// array to manipulate the data
let clientes = new Array();
// parse the file in json format
// now in the clients array we will have a vector
// where in each position of the vector there is an object
// with the data of a client
let position = 0;
let controlInsert = false;
clientes = JSON.parse(file);

let btnFirst = document.getElementById("btnFirst");
let btnBack = document.getElementById("btnBack");
let btnForward = document.getElementById("btnForward");
let btnLast = document.getElementById("btnLast");
let btnDelete = document.getElementById("btnDelete");
let btnInsert = document.getElementById("btnInsert");
let btnUpdate = document.getElementById("btnUpdate");

let showClient = () => {
  document.getElementById("dni").value = clientes[position].dni;
  document.getElementById("name").value = clientes[position].nombre;
  document.getElementById("telephone").value = clientes[position].telefono;
};

let showFirst = () => {
  position = 0;
  showClient();
};

btnFirst.addEventListener("click", () => {
  showFirst();
});

btnLast.addEventListener("click", () => {
  position = clientes.length - 1;
  showClient();
});

btnForward.addEventListener("click", () => {
  position++;
  if (position < clientes.length) {
    showClient();
  } else {
    position--;
  }
});

btnBack.addEventListener("click", () => {
  position--;
  if (position >= 0) {
    showClient();
  } else {
    position++;
  }
});
let showEmpty = () => {
  document.getElementById("dni").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telephone").value = "";
};

let updateFile = () => {
  fs.writeFileSync("./clientes.json", JSON.stringify(clientes));
};

btnDelete.addEventListener("click", () => {
  clientes.splice(position, 1);
  if (position >= clientes.length) {
    position--;
  }
  if (clientes.length == 0) {
    showEmpty();
  } else {
    showClient();
  }
  updateFile();
});

btnInsert.addEventListener("click", () => {
  if (!controlInsert) {
    showEmpty();
    controlInsert = true;

    btnInsert.classList.remove("btn-primary");
    btnInsert.classList.add("btn-negative");
  } else {
    let cnew = {};
    cnew = {
      dni: document.getElementById("dni").value,
      name: document.getElementById("name").value,
      telephone: document.getElementById("telephone").value,
    };
    clientes.push(cnew);
    position = clientes.length - 1;
    showClient();
    updateFile();
    controlInsert = false;
    btnInsert.classList.remove("btn-negative");
    btnInsert.classList.add("btn-primary");
  }
});

btnUpdate.addEventListener("click", () => {
  clientes[position].dni = document.getElementById("dni").value;
  clientes[position].name = document.getElementById("name").value;
  clientes[position].telephone = document.getElementById("telephone").value;
  updateFile();
});
