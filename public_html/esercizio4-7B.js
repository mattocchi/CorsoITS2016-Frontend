'use strict';

function numeroElementi(elenco) {
    try {
        console.log(typeof elenco);
        if (elenco instanceof Array) {
            if (elenco.length === 0) {
                return "Array Vuoto";
            } else if (elenco.length === 1) {
                return "Un Elemento";
            } else {
                return elenco.length + " Elementi";
            }
        } else {
            throw new Error("il parametro non e' un array");
        }
    } catch (e) {
        return e.message;
    }
}

var primi = [2, 3, 5, 7];
console.log(numeroElementi(primi));

console.log(numeroElementi([]));
console.log(numeroElementi([1, 2]));


// cosa succede se non passo parametro alla funzione e se non passo qualcosa che non e' un array?
console.log(numeroElementi());
console.log(numeroElementi("abcde"));
console.log(numeroElementi(10));