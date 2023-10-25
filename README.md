
# Grocery Store - Angular & ASP.NET MVC

This is a web application for a Result Management of Students built using  HTML, CSS, JavaScript and Node.

## Technologies Used
### Front-End (Angular)
* **Ejs ViewEngine**: EJS is a simple templating language that is used to generate HTML markup with plain JavaScript. It also helps to embed JavaScript into HTML pages.
* **HTML**
* **CSS**

### Back-End (ASP.NET Core)
* **Nodejs**: Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.
* **Sequelize**: Sequelize is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more.

### DataBase (MYSQL)
The Result Management App project utilizes SQL Server as the database management system to store and manage data related to students i.e. the result of the students.

## Functionalities
* Two types of users can login to application by clicking a button on homepage
* Students can enter their roll number and date of birth to view their result
* If roll number and D.O.B. does not match, an error should be shown on screen.
* Teachers can View all records, add new record, edit and delete the records
### There are 3 kinds of Roles:
1. Teacher
2. Student


## Installation
To run the Result Management App locally, follow these steps:

### Prerequisites
* Node.js: Install Node.js to ensure you have the latest version of npm (Node Package Manager).

1. Clone the repository to your local machine.
2. Navigate to the directory.
3. Run the following command to install the dependencies:
```console
npm install
```
This will install all the required packages/modules to run the app
4. After the installation is complete, create a file name *config.env* to put and put your database credentials inside the file:
```console
DBUSERNAME=<Your My Sql server username>
DBPASSWORD=<Your My Sql server password>
```
5. Now run the application using 
```console
npm start
```

This will run the application on your local machine, to open the application in the browser, open it on the port given in the console, The application will either run on **localhost:8080** or **localhost:3000**.
