const cows = require('cows'); // nos permita usar la instalacion de este paquete


let randomCow = cows()

let randomIndex = Math.floor( Math.random() * randomCow.length ) // 250 ultima posicion es 249

console.log(randomCow[randomIndex])