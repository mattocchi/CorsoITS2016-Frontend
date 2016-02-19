// la variabile e’ un nome simbolico per un valore
var x; // dichiara una variabile di nome x

// i valori sono assegnati con segno =
x = 0; // ora la variabile x ha valore 0 (Number type)
x = 0.01; // decimale (Number type sia per real che integer)
x = "ciao"; // stringa di testo fra doppie virgolette
x = 'corso'; // testo racchiuso fra virgoletta singola
x = true;
x = null; // Null e’ valore speciale, significa senza valore
x = undefined; // undefined e’ simile a null

// uno dei tipi dato più importanti di javascript sono gli oggetti
// gli oggetti sono una raccolta di coppie nome/valore, o una mappa string to value 
var libro = {  				// oggetti sono racchiusi fra parentesi graffe
  argomento: “Programmazione”, 	// la proprietà “argomento” ha valore “Programmazione”
  pagine: 500 					// 
};							// parentesi chiusa indica fine dell’oggetto


// possiamo accedere alle proprietà con . o []
libro.argomento 				// => “Programmazione”
libro[“pagine”]				// => 500
libro.autore = “Carlo”;			// crea una nuova proprietà per assegnazione
libro.contenuto = {};			// {} un oggetto vuoto senza proprietà
