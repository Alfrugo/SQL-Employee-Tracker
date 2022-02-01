const inquirer = require('inquirer');

const cTable = require('console.table');
// const express = require('express');

const connection = require('./db/connection');

const startApp = require('./utils/questions')
// const mysql = require('mysql2');
  
// Query database INITIAL TESTS TO MAKE SURE DB WORKS
// connection.query('SHOW TABLES', function (err, results) {
//   console.log(results);
//   console.log('hello')
// });
// connection.query('SHOW TABLES', function (err, results) {
//   console.log(results);
// });
// connection.query('SELECT * FROM employee', function (err, results1) {
//   console.log(results1);
// });


connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId} \n`);
    startApp();
});


