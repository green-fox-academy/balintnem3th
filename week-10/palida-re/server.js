'use strict';



var express = require ('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var app = express();

app.use(bodyParser.json());

app.use('/assets', express.static('assets'));

app.get('/',function(req,res){
    console.log('runing');
    res.sendFile(__dirname + '/index.html');
});

var conn = mysql.createConnection({
    host: "localhost",
    user: "'root'",
    password: "1234",
    database : "clothing"
  });
    

conn.connect(function(err){
if(err){
    console.log("Error connecting to Db");
    return;
}
console.log("Connection established");
});

conn.query("SELECT * FROM clothing;",function(err,rows){
    console.log("Data received from Db:\n");

});



app.get('/warehouse',function(req,res){
    var sql1 = "SELECT * FROM warehouse";
     conn.query(sql1,function(err,rows){
        if(err){
        res.json ({
            'error' : err
            }) ;
        }
        res.json (
          
        {
         result : "ok",
         'rows' : rows
        }) ;
      }); 
});



app.get('/price-check',function(req,res){
    var item = req.query.item;
    var size = req.query.size;
    console.log(item);
    var sql1 = `SELECT unit_price,in_store FROM warehouse WHERE item_name = ${item} AND size = ${size} ;`;
    var query = req.query;
    // if((item ||size) === undefined){
    //     res.status(400);
    //     res.json({
    //             result: 'item or size undefined' 
    //     });
    //     return;      
    // }else 
    if (req.query.quantity < 3) {
        res.json({
             result: 'Please order at least 3, one for yourself, two for your friends' 
        });
        return;
    }
    else{
    conn.query(sql1,function(err,rows){
        if(err){
            console.log('HIBA',err);
        }
        console.log(rows);
        if(rows[0].in_store<req.query.quantity){
            res.json ({
                result: "error, we don't have enough items in store"
            });
            return
        }
        else{
            res.status(200);
            res.json({
                result: "ok",
                total_price: rows[0].unit_price * req.query.quantity
            })
            return
        }
        });
    }
    console.log(query.quantity);
});

app.listen(8080 ,() => {
    console.log('the app is listening on 8080');
  });
