'use strict';

var express = require ('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use('/assets', express.static('./assets'));

app.get('/',function(req,res){
    console.log('runing');
    res.status(200);
    res.sendFile(__dirname + '/index.html');
});


    // id  --> 
app.get('/search/:firstId/:secondId',function(req,res){
const firstId = req.param('firstId');
const secondId = req.params.secondId;  
const reqParams = req.params;
console.log('First Id :',firstId);
console.log('Second Id :',secondId);
console.log('Request Params: ',reqParams);

const queryParams = req.query; 
const queryQ = req.param('product');
const hasColor = req.query.hasOwnProperty('color');
const blue = req.query.color;
const hasUser = req.query.newuser === '';
 const notMemberOfQuery = req.query.anything;
console.log('Teljes Query',queryParams);
console.log('product',queryQ);
console.log('Van Color ?',hasColor);
console.log('Kék? ',blue);
console.log('Üres a user? ',hasUser);
 console.log('Not member',notMemberOfQuery);
 const converted = ((notMemberOfQuery || 0) === 1);
console.log('Nincs ilyen a queryben : ',notMemberOfQuery);
console.log('Converted :',converted);
console.log('is Converted ?',isConvertedReal);






    res.status(200);
    res.json({
        'valami' : 'valami',
     }); 
});

app.listen(8080);
