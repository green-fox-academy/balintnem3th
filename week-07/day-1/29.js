'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for(var i=0;i<=lineCount;i++){
    if(i===0){
        console.log(' '.repeat(lineCount-i)+'*');
    }
    else if(i%2===1){
        console.log(' '.repeat(lineCount-i+1)+'*'.repeat(i+2));
    }

}