let vector = [2, 5];
let area = vector[0] * vector[1];

let promiseArea = new Promise((resolve, reject) => {
    
    if (vector[0] == vector[1]) {
        let cadena = "cuadrado"  
        resolve("La figura es un "+cadena+" y su area es: "+area);
      } else if (vector[0] != vector[1]){
        let cadena = "rectangulo"  
        resolve("La figura es un "+cadena+" y su area es: "+area);
      }else{
        reject(-1)
      }
});

promiseArea
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });