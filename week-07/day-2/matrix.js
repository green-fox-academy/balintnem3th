'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var number=4;
var matrix = [];
for(var i=0; i<number; i++) {
    matrix[i] = [];
    for(var j=0; j<number; j++) {
        if(j +i === number){
        matrix[i][j] = 1;
        }
        else{
        matrix[i][j] = 1;
        }
    }
}

for(var i=0; i<number; i++){
    for(var j=0; j<number; j++){
        console.log(matrix[i][j]);  
    }
}