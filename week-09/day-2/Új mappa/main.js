var apiUrl= "https://time-radish.glitch.me";

var getData = function(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/posts'); 
    httpRequest.send(null);
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText).posts
            document
            datas.forEach(function(i) {
                createPost(i);
                //console.log(datas);
            });
        }
    }  
}

function upVote (id){
    
    //let currentDiv = document.querySelector('#'+id);
    let currentDiv = document.querySelector('[data-id="'+id+'"]')
    //let currentId =id;
    //console.log(i);
    // console.log(currentId.id);
    var httpRequest = new XMLHttpRequest();
    //httpRequest.open('PUT', apiUrl+'/posts/'+currentId+'/upvote');
    httpRequest.open('PUT', apiUrl+'/posts/'+id+'/upvote'); 
    httpRequest.setRequestHeader('Accept','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText)
            var post = document.querySelector('.posts');
            removeChildrenFromNode(post);
            getData();
           // console.log('succes');
        }
    }
    httpRequest.send();

};

function createPost(i){
    let convertedTime = converter(i.timestamp);
    const markup = 
    ` 
    <div class="post ${i.id}"  data-id=${i.id}>
        <div class = "votebox">
                <div class="upvote"  data-item-id=${i.id} onclick="upVote(${i.id})"><img src="assets/upvote.png"></div>
                <p class="post-point">${i.score}</p>
                <div class="downvote"> <img src="assets/downvote.png"></div>    
            </div>  
        <div class ="content">
            <p class="title">${i.title}</p>
            <p class="url">${i.url}<span class = "time"> time: ${convertedTime} </span></p>  
            <div class ="delete" onclick="deletePost(${i.id})">Delete Post</div>  
            <a href="modify.html?id=${i.id}" class ="modify"  >Modify</a>          
         </div>  
    <div>
    `;
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
    //let currentDiv = document.querySelector('#'+id);
    let currentDiv = document.querySelector('[data-id="'+id+'"]')
    //let currentId =id;
    //console.log(i);
    // console.log(currentId.id);
    var httpRequest = new XMLHttpRequest();
    //httpRequest.open('PUT', apiUrl+'/posts/'+currentId+'/upvote');
    httpRequest.open('DELETE', apiUrl+'/posts/'+id); 
    httpRequest.setRequestHeader('Accept','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var datas = JSON.parse(httpRequest.responseText)
            var post = document.querySelector('.posts');
            removeChildrenFromNode(post);
            getData();
           // console.log('succes');
        }
    }
    httpRequest.send();

};





getData();
