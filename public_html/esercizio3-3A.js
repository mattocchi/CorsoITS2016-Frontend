var libro = {
    argomento: "Programmazione",
    pagine: 500,
    "autore" : "Mirco"
};

// possiamo accedere alle proprietà con . o []
console.log(libro.argomento);
console.log(libro["argomento"]);

console.log(libro.autore);
libro.autore = "Carlo";
console.log(libro.autore);

console.log("libro.contenuto="+libro.contenuto);
libro.contenuto = {};
console.log("libro.contenuto="+libro.contenuto);