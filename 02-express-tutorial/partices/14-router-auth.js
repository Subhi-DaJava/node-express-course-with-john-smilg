//07/10/2022
const express = require('express');
const router = express.Router();

// post
 //console.log(req.body); // [Object: null prototype] { name: 'Susun' }
router.post('/', (req, res) => {
     const {name} = req.body;
     if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    
    res.status(401).send('Please Provide Credentials');
    res.send('POST'); // browser POST, console name: nom
 });

module.exports = router;

// post
 //console.log(req.body); // [Object: null prototype] { name: 'Susun' }
// app.post('/login', (req, res) => {
//     const {name} = req.body;
//     if(name) {
//         return res.status(200).send(`Welcome ${name}`);
//     }
    
//     res.status(401).send('Please Provide Credentials');
// });
//res.send('POST'); // browser POST, console name: nom