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

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please Provide name value!'});
    }
    res.status(201).json({ Success: true, data: [...people, name] }); 

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
});


// put methode 
app.put('/api/people/:id',(req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(id, name);
    // res.send('Hello Postman!')
    const person = people.find((person) => person.id === Number(id));
    if(!person) {
        return res.status(400).json({success: false, msg: `No Person With id ${id}`});
    }
    const newPoeple = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ Success: true, data: newPoeple }); 
});

// delete methode 
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person) {
        return res.status(404).json( {success: false, msg: `No Person With id ${req.params.id}` });
    }
    const newPoeple = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPoeple });
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

