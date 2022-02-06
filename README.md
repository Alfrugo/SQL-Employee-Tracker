# SQL-Employee-Tracker

An SQL/Node JS application that allows user to view and manage the departments, roles, and employees in my company so they can organize and plan my business

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: 
 
    view all departments, 
    view all roles, 
    view all employees, 
    add a department, 
    add a role, 
    add an employee, 
    and update an employee role

WHEN I choose to view all departments
    THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
    THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
    THEN I am presented with a formatted table showing employee data:
        employee ids, 
        first names
        last names
        job titles
        departments
        salaries
        managers that the employees report to
WHEN I choose to add a department
    THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
    THEN I am prompted to enter:
        the name
        salary
        department for the role and that role is added to the database
WHEN I choose to add an employee
    THEN I am prompted to enter: 
        the employee’s first name
        last name
        role
        manager
    and that employee is added to the database
WHEN I choose to update an employee role
    THEN I am prompted to select an employee to update and their new role and this information is updated in the database


## Application visuals

<img src="https://user-images.githubusercontent.com/36056407/152698376-66a806f9-6625-4c74-a26b-17d5c5b01d74.png">

<img src="https://user-images.githubusercontent.com/36056407/152698377-9657cd97-d14e-4e4e-8fb3-f890df14edc5.png"> 

<img src="https://user-images.githubusercontent.com/36056407/152698378-1af17974-693c-4674-8b5b-19af5e8bed03.png"> 


## License

The license used for this project is MIT.

This project was created by [Alfredo Diez](https://alfredo-diez.com)  - Please, [contact me](mailto:diez_alfredo@hotmail.com) if you have further questions. 

