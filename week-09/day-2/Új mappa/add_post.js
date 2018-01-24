var apiUrl= "https://time-radish.glitch.me";

var getData = function(){
    var title = document.getElementById('input1').value;
    var url = document.getElementById('input2').value;
    var sendBack = {
        'title': title,
        'url': url
    } 
    console.log(sendBack);
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', apiUrl+'/posts'); 
    httpRequest.setRequestHeader('Accept','application/json');
    httpRequest.setRequestHeader('Content-Type','application/json');
    httpRequest.setRequestHeader('Username','nem-balint');
    httpRequest.send(JSON.stringify(sendBack));
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            console.log('sikerult'); 
        }
    }
}

var button = document.querySelector('button');
button.addEventListener('click',getData);

