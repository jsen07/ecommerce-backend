# Ecommerce Back-end

## Project Description

To build the back end for an e-commerce site using an Express.js API and configure it to use Sequelize to interact with a MySQL database. The app should use GET, POST, PUT, and DELETE methods to interact with the data in the database.

IMPORTANT

## User Story

- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies


## Acceptance Criteria

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Languages Used

- Javascript/Node.js

## How to use

To run the application using VS Code in the terminal you must:

Install required packages to run the app.
```
npm install

```

Initialize database using 'develop/db/employees.sql;' im the terminal
```
source develop/db/employees.sql;

```
Populate the database by using 'develop/seeds/index.js'
```
node develop/seeds/index.js

```
Start the application
```
node server.js

```

## Application

ECOMMERCE BACK-END
![image](https://user-images.githubusercontent.com/56829664/236333156-71add3d3-24b9-45aa-a22b-5b109f410b51.png)
![image](https://user-images.githubusercontent.com/56829664/236333207-a11f4507-413e-43ce-87f0-08f0bd07c16d.png)
![image](https://user-images.githubusercontent.com/56829664/236333243-ad26282d-9f1e-45a1-9556-f499cd8c5a75.png)
![image](https://user-images.githubusercontent.com/56829664/236333290-210419aa-ac21-4d0d-a902-7566888790f6.png)


## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
