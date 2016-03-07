'use strict';

var utente = {nome: 'Mario', cognome: 'Rossi', anno: 1990}
for (var p in utente) {
    console.log(p);
    console.log(utente[p]);
}