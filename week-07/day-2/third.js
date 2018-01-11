'use strict';
// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`

//var magicNumbers = [1, 3, 5, 7];
//console.log(magicNumbers[2]);

var magicNumbers=[1, 3, 5, 7];
function third(list){
    for(var i=0;i<3;i++){
        if(i===2){
            console.log(list[i]);
        }
    }
}
third(magicNumbers);