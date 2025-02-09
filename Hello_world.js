// tash 1
console.log("Hello world");

// task 2
let http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
   
    res.write ('Hello Node!!!!');
    res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/')

// task 3
let fs = require('fs');
fs.writeFile('Hello.txt', 'Hello from Node', (err) =>{
    if(err) throw err;
    console.log('File created and saved');
} )

// task 4

