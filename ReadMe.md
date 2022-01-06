# ToDoApp

Essentially, this application is intended to let users log in and administrate to-do's.

## Tools needed to run the App

Frontend:
<ul>
  <li>create-react-app 5.0.0</li>
  <li>react-router-dom 6.2.1</li>
  <li>react-bootsrtap 2.1.0 </li>
  <li>sass 1.45.2</li>
</ul>

Backend 
<ul>
  <li>MySql 2.18.1</li>
  <li>express 4.17.2 </li>
  <li>cors 2.8.5  </li>
  <li>nodemon 2.0.15</li>
  <li>express-session 1.17.2 </li>
</ul>


## About the Proyect

The proyect is intended to be fully functional ToDo App, it has:
<ul>
  <li>A working relational database bassed on MySql</li>
  <li>Functional backend structure build like a rest api to comunicate with the database</li>
  <li>Essential user interfaces to pull data allocated in the database, thesse are todos and folder interfaces </li>
</ul>

## Whats Next?
As this is not a finished proyect these are some of the things that I'll get done in the future:
<ul>
  <li>Rewrite the backend into layers</li>
  <li>Finish integration between user interfaces and backend</li>
  <li>Clone the database in a NoSql model</li>
  <li>Finish extra functionalities such as user login</li>
</ul>

## How to navigate through the app?
As I mentioned before, this means you cant navigate in the proyect as intender just yet, this is how you can acces the different parts of the proyect at the moment>
<ol>
  <li>After installing all the required dependencies in any terminal of your preference go the Frontend folder and run "npm start" this will start the server</li>
   <li>The next step is to locally mount the database in any of your preffered ways, afterwards, you should open another terminal and look for the ../Backend/Src folder, once inside, run "node Server.js" this will start the server and connect the application to the database </li>
  <li>From here you can acces http://localhost:3000/ as well as http://localhost:3000/home and also http://localhost:3000/Folders, having the backend server started and the database mounted, the application will fetch and display the data allocated in the database</li>
</ol>

