'use strict';

var lineCount = 30;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
var firstLast=[]
var otherLine=[]
for(var i =0;i<lineCount;i++){
    firstLast.push('%');
}
for(var i =0;i<lineCount;i++){
    if(i ===0 || i===lineCount-1){
        otherLine.push('%')
    }
    else{
        otherLine.push(' ');
    }
}
for(var i=0;i<lineCount;i++){
    if(i===0 || i===lineCount-1){
    var str=firstLast.join(' ');
    console.log(str);
    }
    else{
        var str=otherLine.join(' ');
        console.log(str);
    }
}