const http = require("http");

var server = http.createServer(function(req,res){
    res.writeHead(200,("Content-type"))
    res.end("ª")
});

server.listen(3000,"127.0.0.1");