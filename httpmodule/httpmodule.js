console.log("HTTP MODULE");

let http = require("http");
http.createServer(function (request,response) {
    response.write("factorial is "+ 5*3);
    response.end("hello, i am node service response");
}).listen("9000");