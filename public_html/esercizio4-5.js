'use strict';

var numeri = [];

for (var i = 0; i < 100; i++) {
    numeri[i] = i;
}

var countPari = 0;
for (var i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) {
        console.log(numeri[i]);
        countPari++;
    }
    
    if (countPari > 10) {
        break;
    }
}