var peopleList= [{
    name:"Bálint",
    image:"prof-pic.png"
},
{
    name:"Bálint2",
    image:"prof-pic.png"
},
{
    name:"Bálint3",
    image:"prof-pic.png"
}
];
generate();

var shuffleBox = [];
generateShuffleBox();
function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}
//var people = document.querySelector(".people");
function move (param){
    shuffleBox.push(peopleList[param]);
    console.log("!!!!!!!");
    peopleList.splice(param,1)
    generate();
    generateShuffleBox();
}

function removeChildrenFromNode(node) {
    if(node === undefined || node === null) {
       return;
     }
     var len = node.childNodes.length;
     while (node.firstChild) {
       node.removeChild(node.firstChild);
     }
 }
function generate() {
    var container = document.querySelector(".people");
    removeChildrenFromNode(container);
    console.log(peopleList.length);
    for(var i=0;i<peopleList.length;i++){
        var newDiv = document.createElement('div')
        newDiv.classList.add("person");
        var profImg=newDiv.appendChild(document.createElement("img"));
        profImg.setAttribute("src","img/"+peopleList[i].image);
        var profName = newDiv.appendChild(document.createElement("span"));
        profName.innerText = peopleList[i].name;
        var profButton = newDiv.appendChild(document.createElement("input"));
        profButton.setAttribute("type","checkbox");
        profButton.addEventListener('change',move.bind(null,i));
        document.querySelector(".people").appendChild(newDiv);
    }
};
function generateShuffleBox(){
    var container = document.querySelector(".shuffle-box");
    removeChildrenFromNode(container);
    for(var i=0;i<shuffleBox.length;i++){
        var newDiv = document.createElement('div')
        newDiv.classList.add("person");
        var profImg=newDiv.appendChild(document.createElement("img"));
        profImg.setAttribute("src","img/"+shuffleBox[i].image);
        var profName = newDiv.appendChild(document.createElement("span"));
        profName.innerText =shuffleBox[i].name;
        var profButton = newDiv.appendChild(document.createElement("input"));
        profButton.setAttribute("type","checkbox");
        profButton.addEventListener('change',move.bind(null,i));
        document.querySelector(".shuffle-box").appendChild(newDiv);
    }
}








    
