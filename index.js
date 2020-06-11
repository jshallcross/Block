const express = require('express');
          app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("landing");
});
app.get("/whatWeDo", function(req, res){
    res.render("whatWeDo");
});
app.get("/BYOB", function(req, res){
    res.render("BYOB");
});
app.get("/Gallery", function(req, res){
    res.render("Gallery");
});
app.get("/getintouch", function(req, res){
    res.render("getintouch");
});



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});


