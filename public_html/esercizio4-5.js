'use strict';

var numeri = [i];

for (var i = 0; i < 100; i++) {
    numeri[i] = i + 1;
}

var countPari = 0;
for (var i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) { // se è un numero pari
        console.log(numeri[i]);
        countPari++;
    }
    
    if (countPari === 10) {
        break;
    }
    
    // Non Ottimizzato (100 cicli)
//    if (countPari <= 10) {
//        if (numeri[i] % 2 === 0) { // se è un numero pari
//            console.log(numeri[i]);
//            countPari++;
//        }  
//    } else {
//        break;
//    }
}