const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      port: '3306',
      // {TODO: Add your MySQL password}
      password: '',
      database: 'employeeTrackerDB'
    },
    console.log(`Connected to the employeeTrackerDB`)
  );

  module.exports = connection;
  