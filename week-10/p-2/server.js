'use strict'; // eslint-disable-line

/* eslint linebreak-style: ['error', 'windows'] */

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'licence',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// conn.query('SELECT * FROM licence_plates;', (err, rows) => {
  //   console.log('Data received from Db:\n');
  //   //console.log(rows);
  // })

app.use((req, res, next) => {
  console.log(req.method.concat(' ', req.url));
  next();
});

app.use(express.static('page'));

app.get('/search', (req, res) => {
  const plate = '';
  console.log(plate);
  const sql = `select * from licence_plates where plate like '%${plate}%'`;
  conn.query(sql, (err, row) => {
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

app.listen(PORT, () => {
  console.log('app listen on :', PORT);
});
