'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals(){

    this.sound = 'quack';

    this.say= function (){
        console.log(this.sound);
    }
}
const kutya = new Animals();
const duck =new Animals();
// kutya.sound = 'woof';
Animals.prototype.sound = 'moo';


console.log(Animals.prototype.sound);
console.log(Animals.sound);
kutya.say();