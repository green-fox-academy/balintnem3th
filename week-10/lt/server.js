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

const queryParams = req.query; 
const queryQ = req.param('product');
const hasColor = req.query.hasOwnProperty('color');
const blue = req.query.color;
const hasUser = req.query.newuser === '';
const notMemberOfQuery = req.query.anything;

  res.status(200);
  res.json({
      'valami' : 'valami',
   }); 
});

app.listen(8080);
