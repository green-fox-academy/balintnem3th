
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

//   app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.get('/',function(req,res){
    console.log('runing');
    res.sendFile(__dirname + '/index.html');
});


  conn.query("SELECT * FROM licence_plates;",function(err,rows){
    console.log("Data received from Db:\n");

});
  

  app.get('/search',function(req,res){
    var plate = req.param('q');
    var sql1 = "SELECT * FROM licence_plates WHERE plate LIKE '"+plate+"%'";
   
    if(plate === undefined){
        res.json ({
             "error": "Please provide an input!"
         }) ;   
     }
     conn.query(sql1,function(err,rows){
        if(err){
        res.json ({
            'error' : err
            }) ;
        }
        res.json ({
         'rows' : rows
        }) ;
      }); 
});


app.get('/search/:brand',function(req,res){
    var brand = req.params.brand;
   // console.log(brand);
    var sql2 = "SELECT * FROM licence_plates WHERE car_brand='"+brand+"'";
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
