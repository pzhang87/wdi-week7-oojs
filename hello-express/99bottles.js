var express = require("express");
var app = express();

app.set("view engine", "hbs")

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  res.redirect('/99')
})

// app.get("/:numberOfBottles", function(req, res) { //CAMEL CASE YOU FOOL
//   bottles = req.params.numberOfBottles || 99;
//   var next = bottles - 1;
//   if (bottles > 0){
//     res.send(bottles + " bottles of beer on the wall" + "\n" +
//     '<a href="' + next + '"> take one down, pass it around</a>');
//   }
//   else {
//     res.send("0 bottles of beer on the wall <a href='/'>start over</a>")
//   }
// })

app.get("/:numberOfBottles?", function(req, res){
  var bottles = req.params.numberOfBottles || 99;
  var next = bottles - 1;
  res.render("index", {bottles: bottles, next: next});
});
