'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangles(width,length,height){
    this.width =width;
    this.length = length;
    this.height = height;
    
}

Rectangles.prototype.getArea= function(){
    console.log(this.width * this.length);
}

Rectangles.prototype.getCircumference = function(){
    console.log((this.height*this.width)*2);
}
const newRec = new Rectangles(3,4,5);
newRec.getArea();
newRec.getCircumference();