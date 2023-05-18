const router = require('express').Router();

const {dbcreatenote, dbupdate} = require("../../notes/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/Db.json");

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newnote = dbcreatenote(req.body, notes);
    res.json(newnote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    dbupdate(params, notes);
    res.redirect('');
  });

  module.exports = router;