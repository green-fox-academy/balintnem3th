'use strict';
// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`

var p1 = [1, 2, 3];
var p2 = [4, 5,6];

function compare(list1,list2){
    if(list1.length<list2.length){
        console.log("The second list has more mebers");
    }
    else if(list2.length<list1.length){
        console.log("The first list has more mebers");
    }
    else{
        console.log("The two lis has same amount of members");
    }

}
compare(p1,p2);