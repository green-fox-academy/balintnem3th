'use strict'; // eslint-disable-line

/* eslint linebreak-style: ['error', 'windows'] */

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;
const utilization = 60;
app.use(express.json());

app.use(express.static('page'));

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

conn.query('SELECT * FROM planet;', (err, rows) => {
  console.log('Data received from Db:\n');
  // console.log(rows);
});

app.get('/planets', (req, res) => {
  const sql1 = 'SELECT * FROM planet';
  conn.query(sql1, (err, rows) => {
    if (err) {
      res.status(400);
      res.json({
        error: err,
      });
    }
    res.status(200);
    res.json({
      rows,
    });
  });
});

app.get('/ship', (req, res) => {
  const sql = 'SELECT * FROM spaceship;';
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

app.post('/movehere/:planetId', (req, res) => {
  let planetId = req.params.planetId; 
  console.log('planetId', planetId);
  const sql = `SELECT name FROM planet WHERE id = ${planetId};`;
  conn.query(sql, (err, name) => {
    if (err) {
      console.log('error');
    } else {
      const planetName = name[0].name;
      console.log('planetName', planetName);
      const sql2 = `UPDATE spaceship SET planet = '${planetName}' WHERE id = 1;`;
      conn.query(sql2, (error, row) => {
        if (error) {
          res.status(400);
          res.json({
            error,
          });
        }
        res.status(200);
        res.json({
          rows: row,
        });
      });
    }
  });
});

app.post('/toship/:planetId', (req, res) => {
  const planetId = req.params.planetId;
  const sql = `SELECT population FROM planet WHERE id = ${planetId};`;
  conn.query(sql, (err, population) => {
    if (err) {
      console.log(err);
    }
    const populationOnPlanet = population[0].population;
    if (populationOnPlanet >= utilization) {
      const substractedPop = populationOnPlanet - utilization;
      const sql2 = `UPDATE planet,spaceship SET population =${substractedPop} , utilization = utilization+60 WHERE planet.id = ${planetId} and spaceship.id = 1;`;
      conn.query(sql2, (error, row) => {
        if (error) {
          res.status(400);
          res.json({
            error,
          });
          console.log(error);
          return;
        }
        res.status(200);
        res.json({
          rows: row,
        });
      });
    }
    else {
      const sql2 = `UPDATE planet,spaceship SET population = 0 , utilization = utilization+${populationOnPlanet} WHERE planet.id = ${planetId} and  spaceship.id = 1;`;
      conn.query(sql2, (error, row) => {
        if (error) {
          res.status(400);
          res.json({
            error,
          });
          console.log(error);
          return;
        }
        res.status(200);
        res.json({
          rows: row,
        });
      });
    }
  });
});

app.listen(PORT, () => {
  console.log('app listen on :', PORT);
});
