'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var h =10;
var l = 15;
var w = 20;

var surface = (2*l*w)+(2*h*w)+(2*l*h);
var volume = l*w*h;

console.log(surface);
console.log(volume);