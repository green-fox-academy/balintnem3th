
'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(){
    if(arguments.length===0){
        console.log("no argument");
    }
    else{
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
}

printer();
printer("almafa");
printer("al","ma","fa");
printer([1,2,3,4,5]);
printer(1,2,3,4,5,6);