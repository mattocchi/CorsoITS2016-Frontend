var punto1 = {
    x:1,
    y:1
};
var punto2 = {
    x:2,
    y:2
};
var punto3 = {
    x:3,
    y:3
};

var punti = [punto1, punto2, punto3];

// var punti = [{x:1,y:1},{x:2,y:2},{x:3,y:3}];

// aggiorno le proprietà dell'oggetto punto2
punto2.x = 4;
punto2.y = 4;

// attenzione sovrascrive oggetto con questo nuovo
// punti[1] = {x:4, y:4};

// aggiorno le proprità del secondo elemento nell'array
punti[1].x = 4;
punti[1].y = 4;

// aggiungo una coordinata z
punto2.z = 4;

console.log(punti);