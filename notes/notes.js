const fs = require('fs');
const path = require('path');

function dbupdate(id, notesArray) {
    const delnote = id;
    for (let i = 0; i < notesArray.length; i++) {
      if (delnote === notesArray[i].id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "../db/Db.json"),
          JSON.stringify({notes: notesArray}, null, 2), err => {
            if (err) {
              throw err;
            }
          });
      }
    }
  }

  function dbcreatenote(body, notesArray) {
    const newnote = body
    notesArray.push(newnote);
    fs.writeFileSync(
      path.join(__dirname, "../db/Db.json"),
      JSON.stringify({notes: notesArray}, null, 2)
    );
    return newnote;
  };

  module.exports = {
    dbupdate,
    dbcreatenote,
  }; 