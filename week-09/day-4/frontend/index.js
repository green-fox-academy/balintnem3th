'use strict';

var express = require ('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use('/assets', express.static('assets'));

app.get('/',function(req,res){
    console.log('runing');
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling',function(req,res){
    if(req.query.input === undefined){
       res.json ({
            "error": "Please provide an input!"
        }) ;   
    }
    res.json( {
        "received": req.query.input,
        "result": req.query.input*2
      });  
});


app.get('/greeter',function(req,res){

    var prof = req.param('title');
    var name = req.param('name');
    //console.log(name);
    if(name === undefined){
        res.json ({
             "error": "Please provide a name!"
         }) ;   
     }
    if(prof === undefined){
        res.json ({
             "error": "Please provide a title!"
         }) ;   
     }
    res.json({
        "welcome_message": "Oh, hi there " + name +  ", my dear " + prof + "!",
      });

});

app.get('/appenda/:name',function(req,res){
    if( req.params.name === undefined){
        res.status(404); 
    }
    res.json({
         appended : req.params.name +"a",
      });   
});

app.post('/dountil/:what',function(req,res){
    console.log(req.params.what)
    if( req.params.what === 'sum'){
        let sum =0;
        for(var i=0;i<=req.body.until;i++){
            sum += i;
        }
        res.json({result : sum}) 
    }
    else if( req.params.what === 'factor'){
        let fact =1;
        for(var i=1;i<=req.body.until;i++){
            fact *= i;
        }
        console.log(fact)
        res.json({result : fact}) 
    }
    res.json({
         error : "Please provide a number!"
      })
});




app.listen(8080);