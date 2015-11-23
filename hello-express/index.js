var express = require("express");
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

// app.get("/", routes.index );

app.get("/", function(req, res){
  res.send("asdf")
})

app.get("/:name", function(req, res) {
  res.render("hello", { name: req.params.name });
})
