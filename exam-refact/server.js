'use strict';

/* eslint linebreak-style: ['error', 'windows'] */

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/page', express.static('page'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'exam',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.query('SELECT * FROM spaceship;', (err, rows) => {
  console.log('Data received from Db:\n');
});

app.listen(PORT, () => {
  console.log('app listen on :', PORT);
});
