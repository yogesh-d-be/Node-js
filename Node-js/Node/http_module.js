const http = require('http');

//http methods

// 1.POST
// 2.GET
// 3.PUT
// 4.DELETE

//http.createServer - to create the server to handle request, response

//listen - to listen request on specific port

//process.exit() - to stop the event loop

// res.writeHead() sets status code (e.g. 200 = OK)

//res.end() - sends the actual content back to browser

// 200 - OK
// 201 - CREATED
// 400 - BAD REQUEST
// 404 - NOT FOUND
// 500 - INTERNAL SERVER ERROR

const server = http.createServer((req, res) =>{
res.writeHead(200,{
    "content-type":'text/html'
})
if(req.url === '/home' && req.method === 'GET'){

    res.write("<h1>Home Page<h1>")
}
res.end();
});

server.listen(4000);