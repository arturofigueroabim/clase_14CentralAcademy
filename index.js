const express = require('express');
const app = express();
const port = 9000;


app.get('/', function(req,res){
    res.send("Hello World Express!");
})

app.get('/hello', function(req,res){
    res.send("Hello World Express! 9000");
})

app.post('/post-express', function(req,res){
    res.send("Hello World This is a Post! 9000");
})

app.put('/put-express', function(req,res){
    res.send("Hello World This is a PUT! 9000");
})

app.delete('/delete-express', function(req,res){
    res.send("Hello World This is a Delete! 9000");
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
})