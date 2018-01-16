'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.


function countEs(x){
    var counter =0;
    for(var i =0;i<x.length;i++){
        if(x[i] === 'e'){
            counter +=1;
        }
    }
    return counter;
}

var eFriuts = fruits.map(countEs);
console.log(eFriuts);