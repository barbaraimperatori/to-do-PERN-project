const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
// request the body to get the json data
app.use(express.json());

app.listen(5000, () => {
  console.log("server running on port 5000");
});
