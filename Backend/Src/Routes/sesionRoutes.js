//Requires
const express = require(`express`);
const connection = require(`../connection`);

const router = express.Router();

//Checksesion
router.get("/check", (req, res) => {
  if (req.session.user) {
    res.json({ message: "ok", data: req.session.user });
  } else {
    res.json({ message: "error" });
  }
});

//LogIn
router.post("/", (req, res) => {
  const sql = `SELECT user, password
  FROM USER
  WHERE user=?
    AND password=?`;

  connection.query(
    sql,
    [req.body.usuario, req.body.password],
    (error, result) => {
      if (error) {
        res.status(500).json({ mensaje: "Error attemping to verify user" });
      } else {
        if (result.length === 1) {
          const userName = result[0].user;
          const id = result[0].idUser;

          req.session.user = { id: id };
          res.status(200).json({
            mensaje: "User verified successfully",
            data: { name: userName },
          });
        } else {
          res.status(401).json({ mensaje: "Username or password incorrect" });
        }
      }
    }
  );
});

//Cerrar sesion
router.delete("/", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .json({ mensaje: "Error while attempting to close session" });
    } else {
      res.status(200).json({ mensaje: "Session clossed successfully" });
    }
  });
});

module.exports = router;
