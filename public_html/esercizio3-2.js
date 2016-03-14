'use strict';

// javascript supporta  gli arrays (liste indicizzate numericamente) di valori
var primi = [2,3,5,7];


console.log("primo elemento: "+ primi[0]);
console.log("ultimo elemento: "+primi[primi.length-1]);
console.log("dimensione array: "+primi.length);

primi[4] = 11;
		
console.log("nuovo ultimo elemento: "+primi[primi.length-1]);
console.log("nuova dimensione array: "+primi.length);

console.log(primi.length);
console.log("errore: " + (primi.length - 1));

console.log("elemento 6: "+primi[5]);