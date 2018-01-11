'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]
var numbersToCheck = [4,8,12,16];
var checker = function(numbersList,checkNumbers){
    var bool =true;
    for (var i=0;i<numbersToCheck.length;i++){
        if(listOfNumbers.indexOf(numbersToCheck[i]) !== -1){
            bool = true;
        }
        else{
            bool = false;
        }
    }
    console.log(bool);
    return bool;
}
checker(listOfNumbers,numbersToCheck);