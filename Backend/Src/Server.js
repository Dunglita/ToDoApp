//Requires
const express = require(`express`);
const cors = require("cors");
const session = require("express-session");
const app = express();

//Sessions
app.use(
  session({
    secret: "ensolvers2022",
    resave: false,
    saveUninitialized: true,
  })
);

//Static folder
app.use(express.static("public"));

//MiddleWare
app.use(express.json());

//Allow credentials for cookies and set cors origin
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Routes Requires
const folderRoutes = require(`./Routes/folderRoutes`);
const todoRoutes = require(`./Routes/todoRoutes`);
const userRoutes = require(`./Routes/userRoutes`);
const sesionRoutes = require(`./Routes/sesionRoutes`);

//Routes
app.use(`/todo`, todoRoutes);
app.use(`/user`, userRoutes);
app.use(`/sesion`, sesionRoutes);
app.use(`/folder`, folderRoutes);

//Starts Server
app.listen(8000, () => {
  console.log("Server Initialized");
});
