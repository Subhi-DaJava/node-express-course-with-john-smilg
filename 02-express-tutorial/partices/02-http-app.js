const http = require('http');
const {readFileSync} = require('fs');

// get all files 
const homePage = readFileSync('./navbar-app/index.html'); 
const homeStyles = readFileSync('./navbar-app/styles.css'); 
const homeImage = readFileSync('./navbar-app/logo.svg'); 
const homeLogic = readFileSync('./navbar-app/browser-app.js'); 

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;
    // home page
    if( url === '/') {
        res.writeHead(200, {'content-type':'text/html'}) // 'content-type':'text/plain'
        res.write(homePage);
        res.end();
        // same as res.end('<h1>Home Page</h1>'); 
    }
     // about 
    else if( url === '/about') {
        res.writeHead(200, {'content-type':'image/svg+xml'}) // 'content-type':'text/plain'
        res.write('<h1>About out page</h1>');
        res.end();
        // same as res.end('<h1>About Page !</h1>'); 
    }
    // Styles
    else if( url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'}) // 'content-type':'text/plain'
        res.write(homeStyles);
        res.end();
    }
    // Logo
    else if( url === '/logo.svg') {
        res.writeHead(200, {'content-type':'image/svg+xml'}) // 'content-type':'text/plain'
        res.write(homeImage);
        res.end();
    }
    // Logic
    else if( url === '/browser-app.js') {
        res.writeHead(200, {'content-type':'text/javascript'}) // 'content-type':'text/plain'
        res.write(homeLogic);
        res.end();
    }
    // 404
    else {
        res.writeHead(404, {'content-type':'text/html'}) // 'content-type':'text/plain'
        res.write('<h1>page not found ! </h1>');
        res.end();
        // same as res.end('<h1>page not found !</h1>'); 
    }

 
});
server.listen(5000);

