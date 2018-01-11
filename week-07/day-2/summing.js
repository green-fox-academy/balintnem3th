'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function summ(parameters){
    var sum = 0;
    for(var i=0;i<arguments.length;i++) {
        sum+=arguments[i]
    }
    return sum;
}

console.log(summ());
console.log(summ(1));
console.log(summ(1,2));
console.log(summ(1,2,3,4,5,6));