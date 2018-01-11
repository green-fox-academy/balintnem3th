'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,5,6,7,8];
var boolean = numbers.indexOf(7) === -1;
if(!boolean){
    console.log('Hoooray');
}
else{
    console.log('Noo');
}