
'use strict';

var express = require ('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var app = express();

app.use(bodyParser.json());

var conn = mysql.createConnection({
    host: "localhost",
    user: "'root'",
    password: "1234",
    database : "licence_plates"
});
    
conn.connect(function(err){
if(err){
    console.log("Error connecting to Db");
    return;
}
console.log("Connection established");
});

app.use('/assets', express.static('./assets'));

app.get('/',function(req,res){
    console.log('runing');
    res.status(200);
    res.sendFile(__dirname + 'index.html');
});

conn.query("SELECT * FROM licence_plates;",function(err,rows){
    console.log("Data received from Db:\n");
});
  
app.get('/search',function(req,res){

var plate = req.query.q;
var police = req.query.police;  
var diplomat = req.query.diplomat;

var rb = 'RB';
var dt = 'DT';


if(police === undefined && diplomat === undefined){
    var sql1 = "SELECT * FROM licence_plates WHERE plate LIKE '%"+plate+"%'";
}
else if(police !== undefined && diplomat === undefined){
    var sql1 = "SELECT * FROM licence_plates WHERE plate LIKE '"+rb+"%' AND plate LIKE '%"+plate+"%'";
}
else {
    var sql1 = "SELECT * FROM licence_plates WHERE plate LIKE '"+dt+"%' AND plate LIKE '%"+plate+"%'";
} 
    conn.query(sql1,function(err,rows){
    if(err){
    res.json ({
        'error' : err
        }) ;
    }
    res.status(200);
    res.json ({
        'rows' : rows
    }) ;
    }); 
});

app.get('/search/:brand',function(req,res){
    var brand = req.params.brand;
    var police = req.query.police;  
    var diplomat = req.query.diplomat;
    var params = req.params;
    var query = req.query;
    const isDiplomat = parseInt(req.query.diplomat || 0) === 1;
 
  //  console.log(police);
    //console.log(brand);
   // console.log(diplomat);
   console.log('param',params);
    console.log('Full query',req.query);
   // console.log(isDiplomat);
    var rb = 'RB';
    var dt = 'DT';
    if(police === undefined && diplomat === undefined){
        var sql2 = "SELECT * FROM licence_plates WHERE car_brand='"+brand+"'";
    }
    else if(police !== undefined && diplomat === undefined){
        var sql2 = "SELECT * FROM licence_plates WHERE plate LIKE '"+rb+"%' AND car_brand LIKE '%"+brand+"%'";
    }
    else {
        var sql2 = "SELECT * FROM licence_plates WHERE plate LIKE '"+dt+"%' AND car_brand LIKE '%"+brand+"%'";
    } 
    conn.query(sql2,function(err,rows){
    if(err){
    res.json ({
        'error' : err
        }) ;
    }
    res.status(200);
    res.json ({
        'rows' : rows
        });
    }); 
});

app.listen(8080);
