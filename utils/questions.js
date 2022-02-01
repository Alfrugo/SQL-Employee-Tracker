const inquirer = require('inquirer');
const cTable = require('console.table');
// const mysql = require('mysql2');
// const express = require('express');



const connection = require('../db/connection')


startApp = () => {
    inquirer.prompt([
        {
            name: 'initialInquiry',
            type: 'rawlist',
            message: 'Welcome to the SQL-Employee-Tracker. Select you option:',
            choices: ['View departments', 'View roles', 'View employees', 'View employees by manager', 'Add department', 'Add role', 'Add employee', 'Update employee\'s role', 'Update employee\'s manager', 'Remove a department', 'Remove a role', 'Remove an employee', 'View total salary of department', 'Exit program']
        }
    ]).then((response) => {
        switch (response.initialInquiry) {
            case 'View departments':
                viewAllDepartments();    
                break;
            case 'View roles':
                viewAllRoles();
                break;
            case 'View employees':
                viewAllEmployees();
                break;
            case 'View employees by manager':
                viewAllEmployeesByManager();
            break;
            case 'Add department':
                addADepartment();
            break;
            case 'Add role':
                addARole();
            break;
            case 'Add employee':
                addAnEmployee();
            break;
            case 'Update employee\'s role':
                updateEmployeeRole();
            break;
            case 'Update employee\'s manager':
                updateEmployeesManager();
            break;
            case 'Remove a department':
                removeADepartment();
            break;
            case 'Remove a role':
                removeARole();
            break;
            case 'Remove an employee':
                removeAnEmployee();
            break;
            case 'View total salary of department':
                viewDepartmentSalary();
            break;
            case 'Exit program':
                connection.end();
                console.log(' ------------------------------------------------------------------\n You have exited the employee management program. Thanks for using! \n ------------------------------------------------------------------');
                return;
            default:
                break;
        }
    })
}

module.exports = startApp;