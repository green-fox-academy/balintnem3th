var apiUrl= "http://localhost:8080";


 function getPlate(){
    var inputField = document.querySelector('.searchPlate');
    var plateVAriable= inputField.value;
    var police = document.getElementById("policeCheck");
    var diplomat = document.getElementById("diplomatCheck");
    if(police.checked)
    {
        plateVAriable+='&police=1';
    }
    else if(diplomat.checked)
    {
        plateVAriable+='&diplomat=1';
    }
    console.log('!!!'+plateVAriable);
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/search?q='+plateVAriable );    
    httpRequest.send(null);
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var data = (JSON.parse(httpRequest.responseText).rows);
            console.log(data);
            var cont = document.querySelector('.container');
            removeChildrenFromNode(cont);
            createHeader();
            data.forEach(function(i) {
            createRow(i);
            });
            
        };
    }
} 

function getModel(param){
    console.log('getModel');
    var police = document.getElementById("policeCheck");
    var diplomat = document.getElementById("diplomatCheck");
    if(police.checked)
    {
        param+='?police=1';
    }
    else if(diplomat.checked)
    {
        param+='?diplomat=1';
    }
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl+'/search/'+param);    
    httpRequest.send(null);
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4 && httpRequest.status === 200 ){
            var data = (JSON.parse(httpRequest.responseText).rows);
           // console.log('!!!');
            var cont = document.querySelector('.container');
            removeChildrenFromNode(cont);
            createHeader();
            data.forEach(function(i) {
                createRow(i);
            });  
        };
    }
}


function createRow(data){
const markup = 
`  <table>
        <tr>
        <td>${data.plate}</td>
        <td onclick="getModel('${data.car_brand}')" ">${data.car_brand}</btd>
        <td>${data.car_model}</td>
        <td>${data.color}</td>
        <td>${data.year}</td>
        </tr>
    </table>
` ; 
var cont = document.querySelector('.container');
cont.innerHTML += markup;

};

function createHeader(){
   const header=`  
    <table>
            <tr>
            <td>Plate:    </td>
            <td>Brand:    </td>
            <td>Model:    </td>
            <td>Color:    </td>
            <td>Year:     </td>
            </tr>
    </table>`;
    var cont = document.querySelector('.container');
    cont.innerHTML += header;
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

function reload(){
    location.reload();
}
