const inquirer = require('inquirer');
const cTable = require('console.table');
// const mysql = require('mysql2');
// const express = require('express');



const connection = require('./db/connection')

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId} \n`);
    startApp();
});

startApp = () => {
    inquirer.prompt([
        {
            name: 'initialInquiry',
            type: 'rawlist',
            message: 'Welcome to the SQL-Employee-Tracker. Select you option:',
            choices: ['View departments', 'View roles', 'View employees','Add department', 'Add role', 'Add employee', 'Update employee\'s role', 'Exit program']
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
            // case 'View employees by manager':
            //     viewAllEmployeesByManager();
            // break;
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
            // case 'Update employee\'s manager':
            //     updateEmployeesManager();
            // break;
            // case 'Remove a department':
            //     removeADepartment();
            // break;
            // case 'Remove a role':
            //     removeARole();
            // break;
            // case 'Remove an employee':
            //     removeAnEmployee();
            // break;
            // case 'View total salary of department':
            //     viewDepartmentSalary();
            // break;
            case 'Exit program':
                connection.end();
                console.log(' ------------------------------------------------------------------\n You have exited the employee management program. Thanks for using! \n ------------------------------------------------------------------');
                return;
            default:
                break;
        }
    })
}
viewAllDepartments = () => {
    connection.query(`SELECT * FROM department;`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        startApp();
    })
};

viewAllRoles = () => {
    connection.query(`SELECT * FROM role`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        startApp();
    })
};

viewAllEmployees = () => {
    connection.query(`SELECT * FROM employee`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        startApp();
    })
};

addAnEmployee = () => {
    connection.query(`SELECT * FROM role;`, (err, res) => {
        if (err) throw err;
        
            inquirer.prompt([
                {
                    name: 'firstName',
                    type: 'input',
                    message: 'What is the new employee\'s first name?'
                },
                {
                    name: 'lastName',
                    type: 'input',
                    message: 'What is the new employee\'s last name?'
                },
                {
                    name: 'roleTitle',
                    type: 'rawlist',
                    message: 'What is the new employee\'s title?',
                    choices: res.map(role => role.title)
                },
                // {
                //     name: 'manager',
                //     type: 'rawlist',
                //     message: 'Who is the new employee\'s manager?',
                //     choices: employees
                // }
            ]).then((response) => {

                const chosenRole = res.find(role => role.title === response.roleTitle)
                connection.query(`INSERT INTO employee SET ?`, 
                {
                    first_name: response.firstName,
                    last_name: response.lastName,
                    role_id: chosenRole.role_id
                    // manager_id: response.manager,
                }, 
                
                
                (err, res) => {
                    if (err) throw err;
                    console.log(`\n ${response.firstName} ${response.lastName} successfully added to database! \n`);
                    startApp();
                })
            })
        })
};

// updateEmployeeRole = () => {
//     connection.query(`SELECT * FROM employee;`, (err, res) => {
//         if (err) throw err;
        
//             inquirer.prompt([
//                 {
//                     name: 'employeeFN',
//                     type: 'rawlist',
//                     message: 'Which employee would you like to update the role for?',
//                     choices: res.map(employee => employee.first_name)
//                 },

//                 {
//                     name: 'employeeLN',
//                     type: 'rawlist',
//                     message: 'Which employee would you like to update the role for?',
//                     choices: res.map(employee => employee.last_name)
//                 },
//             ]).then(response => {
//                 const chosenEmployeeFN = (response.employeeFN)
//                 const chosenEmployeeLN = (response.employeeLN)
//                 connection.query('SELECT * FROM role' ,(err,res) => {
//                     if (err) throw err
//                     inquirer.prompt([
//                         {
//                             name: 'newRole',
//                             type: 'rawlist',
//                             message: 'What should the employee\'s new role be?',
//                             choices: res.map(role => role.title)
//                         },
//                     ]).then(response => {
//                         const chosenRole = res.find(role => role.title === response.newRole)
//                         connection.query('UPDATE employee SET ? WHERE first_name = ' + "'" + chosenEmployeeFN + "'" + "AND last_name = " + "'" + chosenEmployeeLN + "'",{
//                             role_id: chosenRole.role_id
//                         },(err) => {
//                             if (err) throw err
//                             console.log('Employee role updated')
//                             startApp()
//                         }
//                     )
//                 })
//             })              
//             // .then((response) => {
//             //     connection.query(`UPDATE employee SET ? WHERE ?`, 
//             //     [
//             //         {
//             //             role_id: response.newRole,
//             //         },
//             //         {
//             //             employee_id: response.employee,
//             //         },
//             //     ], 

//         })
//     })
// }

updateEmployeeRole = () => {
    connection.query(`SELECT * FROM role;`, (err, res) => {
        if (err) throw err;
        let roles = res.map(role => ({name: role.title, value: role.role_id }));
        connection.query(`SELECT * FROM employee;`, (err, res) => {
            if (err) throw err;
            let employees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id }));
            inquirer.prompt([
                {
                    name: 'employee',
                    type: 'rawlist',
                    message: 'Which employee would you like to update the role for?',
                    choices: employees
                },
                {
                    name: 'newRole',
                    type: 'rawlist',
                    message: 'What should the employee\'s new role be?',
                    choices: roles
                },
            ]).then((response) => {
                connection.query(`UPDATE employee SET ? WHERE ?`, 
                [
                    {
                        role_id: response.newRole,
                    },
                    {
                        employee_id: response.employee,
                    },
                ], 
                (err, res) => {
                    if (err) throw err;
                    console.log(`\n Successfully updated employee's role in the database! \n`);
                    startApp();
                })
            })
        })
    })
}

addADepartment = () => {
    inquirer.prompt([
        {
        name: 'newDept',
        type: 'input',
        message: 'What is the name of the department you want to add?'   
        }
    ]).then((response) => {
        connection.query(`INSERT INTO department SET ?`, 
        {
            department_name: response.newDept,
        },
        (err, res) => {
            if (err) throw err;
            console.log(`\n ${response.newDept} successfully added to database! \n`);
            startApp();
        })
    })
};

addARole = () => {
    connection.query(`SELECT * FROM department;`, (err, res) => {
        if (err) throw err;
        let departments = res.map(department => ({name: department.department_name, value: department.department_id }));
        inquirer.prompt([
            {
            name: 'title',
            type: 'input',
            message: 'What is the name of the role you want to add?'   
            },
            {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role you want to add?'   
            },
            {
            name: 'deptName',
            type: 'rawlist',
            message: 'Which department do you want to add the new role to?',
            choices: departments
            },
        ]).then((response) => {
            connection.query(`INSERT INTO role SET ?`, 
            {
                title: response.title,
                salary: response.salary,
                department_id: response.deptName,
            },
            (err, res) => {
                if (err) throw err;
                console.log(`\n ${response.title} successfully added to database! \n`);
                startApp();
            })
        })
    })
};