var apiUrl= "http://localhost:8080";


 
function setRequest(){
//    const param='/1/2';
    // const query = '?product=shirt&color=blue&newuser&size=m';
    const combo = '/1/2?product=shirt&color=blue&newuser&size=m';
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/search'+combo);    
    httpRequest.send();
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            console.log(':)');
        };
    }
}

function reload(){
    location.reload();
}
