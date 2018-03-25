'use strict';


var test = require('tape');

class Anagram{

    isAnagram(word1, word2){
        if (typeof word1 !== 'string' || typeof word2 !== 'string') {
            throw new Error('isAnagram requires two strings to be passed.')
        }
        
        var normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
        var normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();
        
        var counts = [];
        var word1Length = normalizedWord1.length;
        var word2Length = normalizedWord2.length
        
        if (word1Length !== word2Length) { return false; }
        
        for (var i = 0; i < word1Length; i++) {
            var index = normalizedWord1.charCodeAt(i)-97;
            counts[index] = (counts[index] || 0) + 1;
        }
        
        for (var i = 0; i < word2Length; i++) {
            var index = normalizedWord2.charCodeAt(i)-97;
            if (!counts[index]) { return false; }
            else { counts[index]--; }
        }
        
        return true;
    }
}


class Test{
    testFn(){
        test('apple test', function (t){
            let newAnagram = new Anagram();
            let anagramTest1  =newAnagram.isAnagram('alma','mala');
            var expected1 = true;
            let anagramTest2  =newAnagram.isAnagram('','');
            var expected2 = true;
            let anagramTest3  =newAnagram.isAnagram('aa','ba');
            var expected3 = false;
            var expectedError = Error;
            t.throws(newAnagram.isAnagram.bind(this, ('a',1)), expectedError, 'error');
            t.equal(anagramTest1, expected1);
            t.equal(anagramTest2, expected2);
            t.equal(anagramTest3, expected3);
            t.end();
        });
    }
};

const newTest = new Test;
newTest.testFn();   