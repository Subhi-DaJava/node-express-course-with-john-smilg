// 28/09/2022 Section 4: General info about Web Server Express.js framwork, 
// 0. git clone https://github.com/john-smilga/node-express-course.git 
// 1. remove the GitHub : rmdir -Force -Recurse.git for windows
// 2. add modules run : npm install
// 3. run: npm start

const http = require('http'); // http build in mondule
const server = http.createServer((req, res) => { // invoke everytime the user hits our server
    console.log('user hit the server');
    res.end('home page');
})

server.listen(5000); // the port, communication endpoint, 443 appartment building, 138.68.239.6:443 