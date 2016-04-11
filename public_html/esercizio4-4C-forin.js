'use strict';

var persona = {nome: 'Mario', cognome: 'Rossi', anno: 1990}
for (var nomeProprieta in persona) {
    console.log(nomeProprieta + "=" + persona[nomeProprieta]);
}