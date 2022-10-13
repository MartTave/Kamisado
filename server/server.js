const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

const cliPath = path.resolve(__dirname + "/../client");

const pagesPath = path.resolve(cliPath + "/pages");
const homePagePath = path.resolve(pagesPath + "/home.html");
const distPath = path.resolve(cliPath + "/dist/");

app.get('/', (req, res) => {
  res.sendFile(homePagePath);
})

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});

app.use(express.static(distPath));
app.use(express.static(pagesPath));