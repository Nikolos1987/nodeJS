const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
app.use(express.static(path.resolve(path.resolve(), "front")));
let dirName = [];
fs.readdir("files", function (err, items) {
  items.forEach((i) => {
    dirName.push({
      fileName: `${i}`,
    });
  });
});

app.get("/1", (req, res) => {
  res.send(dirName);
});
app.get("/1/:id", (req, res) => {
  fs.readFile(`files/${req.params.id}`, "utf8", function (error, data) {
    if (error) throw error;
    res.send(data);
  });
});
app.listen(5000);
