'use strict';

var o = {x: 10, y: 20, z: 30};
for (var p in o) {
    console.log("p=" + p);
    console.log("o[p]=" + o[p]);
//    1. console.log("o[p]=" + o["x"]);
//    2. console.log("o[p]=" + o["y"]);
//    3. console.log("o[p]=" + o["y"]);
}