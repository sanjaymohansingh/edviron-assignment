const express = require("express");
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
