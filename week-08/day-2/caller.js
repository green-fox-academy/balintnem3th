'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}
function selectLastEvenNumber(array,callback){
    for(var i=array.length;i>0;i--){
        if(array[i] % 2 === 0){
            callback(array[i]);
            break;
        };
    }
}


selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8