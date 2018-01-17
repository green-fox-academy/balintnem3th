'use strict';

var xhr = new XMLHttpRequest();
var getResponse = function(){
    var loc = document.querySelector('input').value;
    var pArray = document.querySelectorAll('p');
    console.log('loc !!!!: ' + loc);
    xhr.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=Budapest');
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("X-Mashape-Key", "LhOI7A5JBimshs6B6y9tRBtlwIRjp16okh0jsnotZYK8tdMsO0");
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200 ){
            var datas = JSON.parse(xhr.responseText)
            console.log('loc !!!!: ' + loc);
            console.log(datas);

        }
        //pArray[0] = 
    }
}

// xhr.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location='+loc);
// xhr.setRequestHeader("Accept", "application/json");
// xhr.setRequestHeader("X-Mashape-Key", "LhOI7A5JBimshs6B6y9tRBtlwIRjp16okh0jsnotZYK8tdMsO0");
// xhr.send();

var button3 = document.querySelector('.clicker');
button3.addEventListener('click',getResponse);





