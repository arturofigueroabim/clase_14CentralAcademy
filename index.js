const express = require('express');
const app = express();
const port = 9000;


app.get('/', function(req,res){
    res.send("Hello World Express!");
})

app.get('/hello', function(req,res){
    res.send("Hello World Express! 9000");
})
app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
})