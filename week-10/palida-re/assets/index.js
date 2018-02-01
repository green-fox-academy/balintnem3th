'use strict';

var apiUrl= "http://localhost:8080";

console.log('!!!!');

window.addEventListener('load', function() {
    getAllData();
  })
  

function getAllData(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/warehouse');    
    httpRequest.send(null);
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var data = (JSON.parse(httpRequest.responseText).rows);
            console.log(data);
            var cont = document.querySelector('.table');
            data.forEach(function(i) {
                createRow(i);
            });
            
        };
    }
} 

function priceCheck(event){
    console.log('hello')
    event.preventDefault();
    const form = document.querySelector('form');
    const clothesSelect = form.elements.namedItem('clothes');
    var clothes = "'" +clothesSelect.options[clothesSelect.selectedIndex].text+ "'";
   // var clothes = document.getElementById("clothes").value;
    console.log(clothes);
    var size0 = document.getElementById("size").value;
    var size = "'" +size0 + "'" ;
    var quantity = document.getElementById("quantity").value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/price-check/?item='+clothes+'&size='+size+'&quantity='+quantity );    
    httpRequest.send(null);
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var data = (JSON.parse(httpRequest.responseText));
            var h2 = document.getElementById("results");
            removeChildrenFromNode(h2);
            console.log(data.result);
            if(data.result === 'ok'){
                h2.innerHTML += 'You can order these item with the price of : ' + data.total_price;
            }
            else{
                h2.innerHTML += data.result;
            }
        };
    }
}


function createRow(data){
    const markup = 
    `       <tr>
            <td >${data.item_name}</btd>
            <td>${data.manufacturer}</td>
            <td>${data.category}</td>
            <td>${data.size}</td>
            <td>${data.unit_price}</td>
            <td>${data.in_store}</td>
            </tr>
    ` ; 
    var table = document.querySelector('.table');
    table.innerHTML += markup;
};

var button = document.getElementById('submit');
button.addEventListener("click" , priceCheck);

function removeChildrenFromNode(node) {
    if (node === undefined || node === null) {
        return;
    }
    var len = node.childNodes.length;
    while (node.firstChild) {
    node.removeChild(node.firstChild);
    }
}