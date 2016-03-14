'use strict';

var numeri = [];

for (var i = 0; i < 10; i++) {
    numeri[i] = i;
}

var somma = 0;
for (var i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) continue;
    console.log(numeri[i]);
    somma = somma + numeri[i];
}

console.log("somma=" + somma);