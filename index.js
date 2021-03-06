const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("You've reached the home route!"));
app.get("/about", (req, res) =>
  res.send("This is a practice app to learn about express routes.")
);

// app.get("/:input", (req, res) => {
//   console.log("req.params: ", req.params);
//   res.send("Our parameter is: " + req.params.input + ".");
// });

app.get("/greet/:name", (req, res) => {
  res.send("Hello " + req.params.name + "!");
});

app.get("/querystring", (req, res) => {
  let printOut = "";
  for (const key in req.query) {
    printOut += key + ": " + req.query[key] + "<br />";
  }

  res.send("Here's what they sent:<br /><br />" + printOut);
});

app.listen(8000);
