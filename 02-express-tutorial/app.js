// 07/10/2022 Http Methods: Read the data, modify and delete it 

const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public')); // build a middleware,provide a path methods-public, static files, run : http://localhost:5000/index.html

// add or insert data
// parse form data
app.use(express.urlencoded({ extended: false })); // extended is flag, middleware build-in

// Parse Json 
app.use(express.json());

app.get('/api/people', (req, res) => { // http get method to browser
    res.status(200).json({success: true, data: people});
})
app.post('/api/people', (req, res) => { // javascript
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please Provide name value!'});
    }
    res.status(201).json({ Success: true, person: name }); 
})

// post
app.post('/login', (req, res) => {
    //console.log(req.body); // [Object: null prototype] { name: 'Susun' }
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    //res.send('POST'); // browser POST, console name: nom
    res.status(401).send('Please Provide Credentials');
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

