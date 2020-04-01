var tableData = require("../db/tableData");
const fs = require("fs");


var dataObj = {};

// console.log("tabledata:", tableData);
//Routes
module.exports = function (app) {

  //Gets
  app.get("/api/notes", function (req, res) {
    res.json(tableData);
    // console.log(tableData.length)
    // console.log(tableData);

  });

  //Posts
  app.post("/api/notes", function (req, res) {

    tableData.push(req.body);
    fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(tableData));
    res.json(true);

  });

  //Delete

  app.delete("/api/notes/:note", function (req, res) {

    // console.log(req.params.note)
    let id = req.params.note;
    tableData = tableData.filter(data => data.id !== id)
    fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(tableData));
    res.json({ ok: true });


  });
};



