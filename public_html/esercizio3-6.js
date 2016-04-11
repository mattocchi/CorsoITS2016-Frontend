var scope = "globale";
// var x = 2;

function f() {
    // x = 10;
    console.log(scope); // Prints "undefined", not "global"
    var scope = "locale"; // Variable initialized here, but defined everywhere
    console.log(scope); // Prints "local"
}

console.log(scope); // stampa globale
f();
console.log(scope); // stampa globale

///* 
// * Questa tecnica rifle con precisione il vero scope delle variabili.
// */
//function f2() {
//   var scope;
//   console.log(scope);
//   scope = "local";
//   console.log(scope);
//}