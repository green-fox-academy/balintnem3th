'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

var abc = ["Arthur", "Boe", "Chloe"];
var x= 0, y= 2;
abc[x] = abc.splice(y, 1, abc[x])[0];
console.log(abc); 