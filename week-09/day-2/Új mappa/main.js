var apiUrl= "https://time-radish.glitch.me";

var getData = function(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/posts'); 
    httpRequest.send(null);
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText).posts
            datas.forEach(function(i) {
                createPost(i);
            });
        }
    }  
}


function createPost(data){
    const markup = 
    `  <div class="post" data-id=${data.id}>
        <div class = "votebox">
            <div class="upvote"  onclick="upVote(${data.id})">
                <img src="assets/upvote.png">
            </div>
            <p class="post-point">${data.score}</p>
            <div class="downvote">
                <img src="assets/downvote.png">
            </div>    
        </div>  
        <div class ="content">
            <p class="title">${data.title}</p>
            <span class = "time"> time: ${convertedTime} </span>  
            <a href="modify.html?id=${data.id}" class ="modify"  >Modify</a>
            <div class ="delete" onclick="deletePost(${data.id})">Delete Post</div>
            <div class="url">${data.url}</div>           
        </div>  
    <div> ` ;
    let convertedTime = converter(i.timestamp);
    var posts = document.querySelector('.posts');   
    posts.innerHTML += markup;
    var upVoteDiv = document.querySelector('.upvote');
  
    };


function converter(unix_timestamp){
    var date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours()+1;
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
};

function removeChildrenFromNode(node) {
    if (node === undefined || node === null) {
        return;
    }
    var len = node.childNodes.length;
    while (node.firstChild) {
    node.removeChild(node.firstChild);
    }
}


function deletePost (id){
    let currentDataId = document.querySelector('[data-id="'+id+'"]')
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('DELETE', apiUrl+'/posts/'+id); 
    httpRequest.setRequestHeader('Accept','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText)
            var post = document.querySelector('.posts');
            removeChildrenFromNode(post);
            getData();
        }
    }
    httpRequest.send();

};

function downVote(id)


function upVote (id){
    let currentDiv = document.querySelector('[data-id="'+id+'"]')
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('PUT', apiUrl+'/posts/'+id+'/upvote'); 
    httpRequest.setRequestHeader('Accept','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText)
            var post = document.querySelector('.posts');
            removeChildrenFromNode(post);
            getData();
        }
    }
    httpRequest.send();
};



getData();
