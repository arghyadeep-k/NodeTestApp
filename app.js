var express = require('express');
var app = express();

app.get('/',function(req,res) {
    console.log("Listening on port 4000");
    res.send("Hello World!");
});

app.listen(4000);
