//Requires
const express = require(`express`);
const connection = require(`../connection`);

const router = express.Router();

router.get(`/`, (req, res) => {
  const sql = `SELECT * FROM FOLDER`;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error obtaining folder: ");
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM FOLDER WHERE idUser = ` + req.params.idUser;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error obtaining the specified folder");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO FOLDER(idFolder, titleFolder, descriptionFolder, idUser)
               VALUES(?, ?, ?, ?)`;

  const idUser = req.body.idUser;
  const user = req.body.user;
  const password = req.body.password;

  connection.query(
    sql,
    [idFolder, titleFolder, descriptionFolder, idUser],
    (err, result) => {
      if (err) {
        res.send("It was not possible to create a new folder");
      } else {
        res.send("Folder created successfully");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE FOLDER 
               SET idFolder=?, titleFolder=?, descriptionFolder=?, idUser=?,
               WHERE idUser=?`;

  const idUser = req.body.idUser;
  const user = req.body.user;
  const password = req.body.password;

  connection.query(sql, [idUser, user, password], (err, result) => {
    if (err) {
      res.send("It was not possible to update the folder");
    } else {
      res.send("Folder updated successfully");
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM FOLDER 
               WHERE idUser=?`;

  const idUser = req.body.idUser;

  connection.query(sql, [idUser], (err, result) => {
    if (err) {
      console.log(err);
      res.send("It was not possible to delete the Folder");
    } else {
      res.send("Folder deleted successfully");
    }
  });
});

module.exports = router;
