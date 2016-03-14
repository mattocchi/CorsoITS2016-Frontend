'use strict';

try {
    
    var numeri = [];
    for (var i = 0; i < 10; i++) {
        numeri[i] = i;
//        if (i >= 10)
//            throw new Error("numero massimo di 10 elementi raggiunto");
    }
    
} catch (e) {
    console.log("si e' verificato un errore");
    console.log(e);
    
} finally {
    console.log("finally, sempre eseguito");
    console.log(numeri);
}