
function numeroElementi(paramArray) {
    var result;
    if (typeof paramArray !== "undefined" && typeof paramArray !== "number") {
        if (paramArray.length === 0) {
            result = "L'Array e' vuoto";
        } else if (paramArray.length === 1) {
            result = "L'Array contiene un elemento";
        } else {
            result = "L'Array contiene " + paramArray.length + " elementi.";
        }
    } else {
        result = "Attenzione parametro è undefined o un numero";
    }
    return result;
}

function numeroElementi2(paramArray) {
    console.log(typeof paramArray);
    if (typeof paramArray !== "undefined" && typeof paramArray !== "number") {
        if (paramArray.length === 0) {
            return "L'Array e' vuoto";
        } else if (paramArray.length === 1) {
            return "L'Array contiene un elemento";
        } else {
            return "L'Array contiene " + paramArray.length + " elementi.";
        }
    } else {
        return "Attenzione parametro è undefined o un numero";
    }
}

function numeroElementi3(paramArray) {
    var result;
    if (typeof paramArray !== "undefined" && typeof paramArray !== "number") {
        switch (paramArray.length) {
            case 0:
                result = "L'Array e' vuoto";
                break;
            case 1:
                result = "L'Array contiene un elemento";
                break;
            default:
                result = "L'Array contiene " + paramArray.length + " elementi.";
                break;
        }
    } else {
        result = "Attenzione parametro è undefined o un numero";
    }
    return result;
}


var arrayTest1 = [1, 2, 3];
var test1 = numeroElementi3(arrayTest1);
console.log("test1=" + test1);

var arrayTest2 = [];
var test2 = numeroElementi3(arrayTest2);
console.log("test2=" + test2);

var arrayTest3 = ["ciao"];
var test3 = numeroElementi3(arrayTest3);
console.log("test3=" + test3);

var test4 = numeroElementi3();
console.log("test4=" + test4);

var test5 = numeroElementi3(10);
console.log("test5=" + test5);

var test6 = numeroElementi3("ciao");
console.log("test6=" + test6);


