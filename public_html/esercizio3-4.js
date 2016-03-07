var then = new Date(2016, 0, 1); // Il primo giorno del primo mese del 2016
var later = new Date(2016, 0, 1, 17, 10, 30); // Stesso giorno alle 17.10:30, local time
var now = new Date(); // data ed  ora correnti
var elapsed = now - then; // differenza fra date in millisecondi

console.log(now);
console.log(elapsed);