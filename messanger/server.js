'use strict';// eslint-disable-line

/* eslint linebreak-style: ['error', 'windows'] */

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.static('assets'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'msg',
});


conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.query('SELECT * FROM messages;', (err, rows) => {// eslint-disable-line
  console.log('Data received from Db:\n');
});

app.get('/get', (req, res) => {
  const sql1 = 'SELECT * FROM messages';
  conn.query(sql1, (err, row) => {
    if (err) {
      res.status(400);
      res.json({
        error: err,
      });
    }
    res.status(200);
    res.json({
      rows: row,
    });
  });
});

app.post('/post', (req, res) => {
  const sql1 = 'INSERT INTO messages (user, msg, time_sent) VALUES ?;';
  const values = ([[req.body.user, req.body.msg, req.body.time_sent]]);
  conn.query(sql1, [values], (err, row) => {
    if (err) {
      res.status(400);
      console.log(err);
      res.json({
        error: err,
      });
    }
    res.status(200);
    res.json({
      rows: row,
    });
  });
});


// app.listen(PORT, () => {
//   console.log('App listen on :', PORT);
// });

// var server = app.listen(3456, function () {
//   var host = server.address().address;
//   console.log('host',host);
//   var port = server.address().port;
//   console.log('port',port);
//   console.log('running at http://' + host + ':' + port)
// });

const server = app.listen(3456, "127.0.0.1", () => {
  console.log('gut a paraszt');
});
