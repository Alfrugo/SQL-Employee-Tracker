INSERT INTO department (department_name)
VALUES 
('Human Resources'),
('Sales'),
('Marketing'),
('Information Tech'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES('Account Executive', 100000, 1),
('Sr. Account Executive', 152000, 1),
('Sales Director', 223000, 1),
('HR Coordinator', 65000, 2),
('HR Generalist', 25000, 2),
('HR Director', 112000, 2),
('Jr. Developer', 91000, 3),
('Sr. Developer', 123400, 3),
('Programming Director', 227600, 3),
('IT Project Manager', 912000, 4),
('IT Project Director', 111000, 4),
('Chief Executive Officer', 342000, 5),
('Chief Operating Officer', 222300, 5),
('Chief Financial Officer', 252000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Felipe', 'Lisardo', 12, NULL),
('Wally', 'Neximan', 13, 1),
('Lunga', 'linga', 14, 1),
('Falty', 'Impbles', 3, 2),
('Lurking', 'Monsters', 9, 2),
('Eliste', 'Inglebler', 11, 2),
('Lifesabitch', 'Thenyoudie', 6, 2),
('Inflatable', 'Dreams', 1, 4),
('Featch', 'Darsy', 1, 4),
('Alfredo', 'Diez', 2, 4),
('Lingering', 'Code', 4, 7),
('Shame', 'Onyou', 5, 7),
('Butcher', 'Table', 5, 7),
('Insta', 'Graham', 7, 5),
('Flipping', 'Cool', 8, 5),
('Reginal', 'Lewinsky', 10, 6),
('Loopy', 'Absolute', 10, 6);