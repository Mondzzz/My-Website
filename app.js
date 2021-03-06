const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req, res){

const year = new Date().getFullYear();

res.render("home", {currentYear: year});

});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
