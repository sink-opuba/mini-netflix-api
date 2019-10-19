var express = require("express");
var cors = require("cors");
var movies = require("./moviesDatabase.js");

const app = express();
app.use(cors());

app.set("port", process.env.PORT || 5000);

app.get("/", function(request, response) {
  response.send("Hello! Please check out '/movies' for the correct endpoint.");
});

app.get("/movies", function(req, res) {
  // Hard coded for simplicity. Let's pretend this hits a real database
  res.json(movies);
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
