var apiUrl= "https://time-radish.glitch.me";
var postUrl = window.location.href;
var postId = postUrl.substring(postUrl.lastIndexOf('=') + 1);

var getData = function(){
    var title = document.getElementById('input1').value;
    var url = document.getElementById('input2').value;
    var sendBack = {
        'title': title,
        'url': url
    } 
    console.log(sendBack);
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('PUT', apiUrl+'/posts/'+postId); 
    httpRequest.setRequestHeader('Accept','application/json');
    httpRequest.setRequestHeader('Content-Type','application/json');
    httpRequest.send(JSON.stringify(sendBack));
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            window.location.href='index.html';
            console.log('sikerult modify'); 
        }
    }
}

var button = document.querySelector('button');
button.addEventListener('click',getData);



Modify.js
AddPost.js


