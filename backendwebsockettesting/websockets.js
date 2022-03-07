const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) =>{
    res.sendFile(express.static("/../websockettesting/build"))
});

server.listen(3000, ()=>{
    console.log('listening on *:3000');
});