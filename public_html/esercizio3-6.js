var scope = "globale";

function f() {
    console.log(scope); // Prints "undefined", not "global"
    var scope = "locale"; // Variable initialized here, but defined everywhere
    console.log(scope); // Prints "local"
}

console.log(scope);
f();
console.log(scope);

/* 
 * Questa tecnica riflettono con precisione il vero scope delle variabili.
 */
function f2() {
   var scope;
   console.log(scope);
   scope = "local";
   console.log(scope);
}