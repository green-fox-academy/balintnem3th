var getArray = function(){
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=J9VOSqPEBSFfHWUBxZRQw3nxB2VwpeMM'); 
httpRequest.send(null);

//httpRequest.onreadystatechange = console.log;
httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
        var datas = JSON.parse(httpRequest.responseText).data
        console.log('Success');
        console.log(datas);
        var images = document.querySelectorAll('img');
        
        for(var i=0;i<datas.len gth;i++){
           
            
            images[i].addEventListener("click",function(){
                var current = this.dataset.indexNumber;
                images[current].setAttribute('src',datas[current].images.original.url);
                console.log(this);
            }
        )

            images[i].setAttribute('src', datas[i].images.original_still.url);
            images[i].setAttribute('data-index-Number',i);
            
          
        }
         
      }      
    };
}
getArray();

// setTimeout(function(){gifArray = getArray();},3000);
// setTimeout(function(){console.log(gifArray)},3000);