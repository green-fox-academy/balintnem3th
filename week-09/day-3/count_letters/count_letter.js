'use strict';

var test = require('tape');

class COUNTLETTER{
    letterCounter(string){
        string.forEach(function(e){
            console.log(e);
        });

           
    }
}

class Test{
    testFn(){
        test('sum test', function (t){
            let newSum = new Sum();

            let sumTest1 = newSum.sumTheNumbers([1,2,3,4,5]);
            let expected1 = 15;

            let sumTest2 = newSum.sumTheNumbers([0]);
            let expected2 = 0;

            let sumTest3 = newSum.sumTheNumbers(['a']);
            let expected3 = 'a';

            var expectedError = TypeError;
            t.throws(newSum.sumTheNumbers.bind(this, []), expectedError, 'error');
            
            t.equal(sumTest1, expected1);
            t.equal(sumTest2, expected2);
            t.equal(sumTest3, expected3);
            t.end();
        });
    }
};

const newTest = new Test();
const newLetterCounter = new COUNTLETTER;
newLetterCounter.letterCounter('kakimaki');
// newTest.testFn();