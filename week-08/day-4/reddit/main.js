var apiUrl= "http://secure-reddit.herokuapp.com/simple";

var getData = function(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/posts'); 
    httpRequest.send(null);
    //httpRequest.onreadystatechange = console.log;
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText).posts
            console.log(datas);
            for(var i=0;i<datas.length;i++){
                const markup = `
                <div class="post" id="1"> 
                <div class = "votebox">
                    <div class="upvote"> ${datas[i].score} <img src="assets/upvote.png"></div>
                    <div class="post-point">Post Point   </div>
                    <div class="downvote"> <img src="assets/downvote.png">  </div>
                        </div>
                    <div class="title">${datas[i].title}</div>
                </div>
                `;
                var posts = document.querySelector('.posts');
               // console.log('post'+posts.innerHTML);
                posts.innerHTML+=markup;
            };
        }
    }
}


getData();