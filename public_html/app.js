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
var libro = {  			// oggetti sono racchiusi fra parentesi graffe
  argomento: "Programmazione", 	// la proprietà “argomento” ha valore “Programmazione”
  pagine: 500 			// 
};                              // parentesi chiusa indica fine dell’oggetto

// possiamo accedere alle proprietà con . o []
libro.argomento 			// => “Programmazione”
libro["pagine"]				// => 500
libro.autore = "Carlo";			// crea una nuova proprietà per assegnazione
libro.contenuto = {};			// {} un oggetto vuoto senza proprietà

// javascript supporta  gli arrays (liste indicizzate numericamente) di valori
var primi = [1,3,5,7] 	// un array di 4 valori, deliminato da []
primi[0]			// => 1: il primo elemento dell’array (indice 0)
primi.length			// => 4: quanti elementi nell’array
primi[primi.length-1]	// => 7: ultimo elemento dell’array
primi[4] = 9;			// aggiunge un elemento all’array per assegnazione
primi[4] = 11;			// modifica il valore di un elemento esistente

var vuoto = [];		// [] e’ un array vuoto senza elementi
vuoto.length			// => 0
// gli array possono contenere altri oggetti e arrays
