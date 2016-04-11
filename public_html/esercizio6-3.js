'use strict';

do {
    var nome = prompt("Quale e' il tuo Nome?");
    var conferma = confirm("Hai inserito '" + nome + "'.\n" + "Cliccca OK per procedere o annulla per re-inserire.");
} while (!conferma)
alert("Ciao, " + nome);
