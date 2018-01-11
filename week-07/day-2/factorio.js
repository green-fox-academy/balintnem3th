'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial


var factorio = function(number) {
    if (number <= 0) { 
      return 1;
    } 
    else { 
      return (number * factorio(number - 1));
    }
  };
  console.log(factorio(1));
  console.log(factorio(0));
  console.log(factorio(2));
  console.log(factorio(6));