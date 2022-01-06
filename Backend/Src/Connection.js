//Requires
const mysql = require(`mysql`);

//Information to connect to the database
const connection = mysql.createConnection({
  //Database Direction
  host: `localhost`,
  //FIXME: Crear usuario no root
  user: `root`,
  password: ``,
  database: `todomanager`,
});
//Database connection
connection.connect((err) => {
  if (err) {
    console.log("Error while attempting to connect to database");
  } else {
    console.log("Connection established to database");
  }
});
module.exports = connection;
