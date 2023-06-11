const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log("Inside server side of post function");
  const feedback = req.body;
  const sqlQuery =
    'INSERT INTO feedback ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)';

  pool
    .query(sqlQuery, [
      feedback.feelings,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then((result) => {
      console.log("Adding feedback to database:", feedback);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error posting to database:", error);
      res.sendStatus(500);
    });
});


module.exports = router;