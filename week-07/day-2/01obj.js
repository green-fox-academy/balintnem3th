'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


var candyCounter = function(obje){
    for(var i =0;i<obje.length;i++){
        console.log(obje[i].name+' have: '+obje[i].candies );
    }
}
var sumAge = function(obje){
    let summm = 0;
    for(var i =0;i<obje.length;i++){
        if(obje[i].candies<5){
            summm+=obje[i].age;
        }
    }
    console.log(summm);
}
candyCounter(students);
sumAge(students);