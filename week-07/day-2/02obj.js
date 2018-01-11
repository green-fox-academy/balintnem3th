'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
var moreThanFour = function(obje){
    for(var i =0;i<obje.length;i++){
        if(obje[i].candies>4){
        console.log(obje[i].name+' have: more than 4 candy' );
    }
    }
}
var averageCandy = function(obje){
    let counter = 0;
    let sumCandy = 0;
    for(var i =0;i<obje.length;i++){
        sumCandy+= obje[i].candies;
        counter +=1;
    }
    console.log('Avarage candy: '+ (sumCandy/counter));
}

moreThanFour(students);
averageCandy(students); 
