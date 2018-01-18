var apiUrl= "http://secure-reddit.herokuapp.com/simple";

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
    httpRequest.send({
        "title": "Crockford",
        "url": "http://9gag.com"
      });
    //httpRequest.onreadystatechange = console.log;
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            console.log('sikerult'); 
        }
    }
}

var button = document.querySelector('button');
button.addEventListener('click',getData);
//getData();
