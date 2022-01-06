//Requires
const express = require(`express`);
const connection = require(`../connection`);

const router = express.Router();

router.get(`/`, (req, res) => {
  const sql = `SELECT * FROM TODO`;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error getting ToDos");
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM TODO WHERE idUser = ` + req.params.idUser;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error while attempting to get  user ToDo's");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO TODO (idTodo, titleTodo, descriptionTodo, idTodoState, idFolder, idUser)
               VALUES(?, ?, ?, ?, ?, ?)`;

  const idTodo = req.body.idTodo;
  const titleTodo = req.body.titleTodo;
  const descriptionTodo = req.body.descriptionTodo;
  const idTodoState = req.body.idTodoState;
  const idFolder = req.body.idFolder;
  const idUser = req.body.idUser;

  connection.query(
    sql,
    [idTodo, titleTodo, descriptionTodo, idTodoState, idFolder, idUser],
    (err, result) => {
      if (err) {
        res.send("It was not possible to create the ToDo");
      } else {
        res.send("ToDo Created");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE TODO 
               SET idTodo=?, titleTodo=?, descriptionTodo=?, idTodoState=?, idFolder=?, idUser=?
               WHERE idUser=?`;

  const idTodo = req.body.idTodo;
  const titleTodo = req.body.titleTodo;
  const descriptionTodo = req.body.descriptionTodo;
  const idTodoState = req.body.idTodoState;
  const idFolder = req.body.idFolder;
  const idUser = req.body.idUser;

  connection.query(
    sql,
    [idTodo, titleTodo, descriptionTodo, idTodoState, idFolder, idUser],
    (err, result) => {
      if (err) {
        res.send("Error attemping to update ToDo");
      } else {
        res.send("ToDo updated");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM TODO
               WHERE idTodo=?`;

  const idTodo = req.body.idTodo;

  connection.query(sql, [idTodo], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error deleting ToDo");
    } else {
      res.send("ToDo deleted successfully");
    }
  });
});

module.exports = router;
