// required packages

const inquirer = require ('inquirer')
const mysql = require ('mysql')
const cTable = require ('console.table')

require('dotenv').config(); //node js local variables

// connection to mysql

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.password,
    database: 'employeeTrackerDB',
})



