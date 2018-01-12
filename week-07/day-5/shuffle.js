var peopleList= [{
    name:"admrid",
    image:"prof-pic.png"
},
{
    name:"Andris",
    image:"prof-pic.png"
},
{
    name:"Bálint",
    image:"prof-pic.png"
},
{
    name:"Fruzsi",
    image:"prof-pic.png"
},
{
    name:"MG11",
    image:"prof-pic.png"
},
{
    name:"Miki",
    image:"prof-pic.png"
},
{
    name:"AlexandraPal",
    image:"prof-pic.png"
},
{
    name:"Bandi",
    image:"prof-pic.png"
},
{
    name:"BelaSzabo",
    image:"prof-pic.png"
},
{
    name:"Bpatrik",
    image:"prof-pic.png"
},
{
    name:"Emese",
    image:"prof-pic.png"
},
{
    name:"Hedvegia",
    image:"prof-pic.png"
},
{
    name:"Kinga",
    image:"prof-pic.png"
},
{
    name:"Laci",
    image:"prof-pic.png"
},
{
    name:"Nandi",
    image:"prof-pic.png"
},
{
    name:"RudolfDani",
    image:"prof-pic.png"
},
{
    name:"Tamás",
    image:"prof-pic.png"
}

];
var shuffleBox = [];
generate();
generateShuffleBox();

function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

function move (param){
    shuffleBox.push(peopleList[param]);
    peopleList.splice(param,1);
    generate();
    generateShuffleBox();
}

function removeChildrenFromNode(node) {
    if (node === undefined || node === null) {
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
        document.querySelector(".shuffle-box").appendChild(newDiv);       
    }
}

function shuffleArray() {
    for (let i = shuffleBox.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleBox[i], shuffleBox[j]] = [shuffleBox[j], shuffleBox[i]];
    }
    generateShuffleBox();    
}
var button = document.querySelector(".button");
button.addEventListener('click', shuffleArray );
  


    
  


    
