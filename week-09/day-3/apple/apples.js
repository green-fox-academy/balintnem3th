'use strict';


var test = require('tape');

class Apple{

    getApple(){
      return 'apple' ;
    }
}


class Test{
    testFn(){
        test('apple test', function (t){
            let newApple = new Apple();
            let appleTest = newApple.getApple();
            var expected = 'apple';
            t.equal(appleTest, expected);
            t.end();
        });
    }
};

const newTest = new Test;
newTest.testFn();