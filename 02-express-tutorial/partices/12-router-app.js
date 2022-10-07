// 07/10/2022 Router

const express = require('express');
const app = express();

const people = require('./routes/people');
const login = require('./routes/auth');

// static assets
app.use(express.static('./methods-public')); // build a middleware,provide a path methods-public, static files, run : http://localhost:5000/index.html

// add or insert data
// parse form data
app.use(express.urlencoded({ extended: false })); // extended is flag, middleware build-in

// Parse Json 
app.use(express.json());

app.use('/api/people', people) // use Router 

app.use('/login', login);

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

