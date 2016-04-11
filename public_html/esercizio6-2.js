'use strict';

var timout = 5000;
var cambiaIndirizzo = function() {
    window.location = 'http://www.google.com';
}

/* da notare non come cambiaIndirizzo() */
setTimeout(cambiaIndirizzo, timout);