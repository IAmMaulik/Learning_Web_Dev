const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", function(req, res){
    console.log(req);
    res.send("<h1>Hello, What's Up</h1>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");;
});
