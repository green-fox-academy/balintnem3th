var xhr = new XMLHttpRequest();
var body = document.querySelector('body');
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200 ){
        var datas = JSON.parse(xhr.responseText).response
        //console.log('Success');
       // console.log(datas.docs) ;
        for(var i=0;i<datas.docs.length;i++){
            var body = document.querySelector('body');
            var newHeader = document.createElement('h1');
            var newDiv = document.createElement('div');
            newHeader.innerText +=  datas.docs[i].headline.main;
            console.log( datas.docs[i]);
            var newP = document.createElement('p');
            newDiv.innerText  +=  datas.docs[i].snippet;
            newP.innerText += "Publication date: "+ datas.docs[i].pub_date;
            body.appendChild(newHeader);
            body.appendChild(newDiv);
            body.appendChild(newP);

        }

    }
}   

xhr.open('GET', 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=7015202a3bc14eccb9f138cfa84bb502'); 
xhr.send(null);