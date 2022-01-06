//Requires
const express = require(`express`);
const connection = require(`../connection`);

const router = express.Router();

router.get(`/`, (req, res) => {
  const sql = `SELECT * FROM USER`;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener usuarios");
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM USER WHERE idUser = ` + req.params.idUser;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error obtaining the specified user");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO USER(idUser, user, password)
               VALUES(?, ?, ?)`;

  const idUser = req.body.idUser;
  const user = req.body.user;
  const password = req.body.password;

  connection.query(sql, [idUser, user, password], (err, result) => {
    if (err) {
      res.send("It was not possible to create a new user");
    } else {
      res.send("User created successfully");
    }
  });
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE USER 
               SET idUser=?, user=?, password=?
               WHERE idUser=?`;

  const idUser = req.body.idUser;
  const user = req.body.user;
  const password = req.body.password;

  connection.query(sql, [idUser, user, password], (err, result) => {
    if (err) {
      res.send("It was not possible to update the user");
    } else {
      res.send("User updated successfully");
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM USER 
               WHERE idUser=?`;

  const idUser = req.body.idUser;

  connection.query(sql, [idUser], (err, result) => {
    if (err) {
      console.log(err);
      res.send("It was not possible to delete the user");
    } else {
      res.send("User deleted successfully");
    }
  });
});

module.exports = router;
