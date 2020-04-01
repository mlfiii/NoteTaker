var fs = require("fs");
var util = require("util")

var tableData = JSON.parse(fs.readFileSync(__dirname + "/db.json"));

module.exports = tableData;
