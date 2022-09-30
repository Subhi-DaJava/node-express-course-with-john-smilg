const http = require('http');
const {readFileSync} = require('fs');

// get all files 
const homePage = readFileSync('./index.html'); // some how static on init



const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;

    if( url === '/') {
        res.writeHead(200, {'content-type':'text/html'}) // 'content-type':'text/plain'
        res.write(homePage);
        res.end();
        // same as res.end('<h1>Home Page</h1>'); 
    }
    else if( url === '/about') {
        res.writeHead(200, {'content-type':'text/html'}) // 'content-type':'text/plain'
        res.write('<h1>About Page !</h1>');
        res.end();
        // same as res.end('<h1>About Page !</h1>'); 
    }
    else {
        res.writeHead(404, {'content-type':'text/html'}) // 'content-type':'text/plain'
        res.write('<h1>page not found ! </h1>');
        res.end();
        // same as res.end('<h1>page not found !</h1>'); 
    }

 
});
server.listen(5000);

