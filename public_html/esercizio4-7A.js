'use strict';

try {
    console.log("try con codice da eseguire");
    var numeri = [];
    for (var i = 0; i < 10; i++) {
        numeri[i] = i + 1;
    }

    var somma = 0;
    for (var i = 0; i < numeri.length; i++) {
        somma = somma + numeri[i];
        // soglia massima inventata 
        // a scopo di esempio
        if (somma > 20) {
            throw new Error("soglia massima superata");
        }
    }


} catch (e) {
    console.log("si e' verificato un errore");
    console.log(e);
} finally {
    console.log("finally, sempre eseguito");
    console.log("somma=" + somma);
}


























//
//
//try {
//    
//    
//    var numeri = [];
//    for (var i = 0; i < 10; i++) {
//        numeri[i] = i;
////        if (i >= 10)
////            throw new Error("numero massimo di 10 elementi raggiunto");
//    }
//    
//} catch (e) {
//
//    
//} finally {
//    
//    console.log(numeri);
//}