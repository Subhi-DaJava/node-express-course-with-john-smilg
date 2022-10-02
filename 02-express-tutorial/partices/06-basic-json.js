//02/10/2022
const express = require('express');
const path = require('path');
const app = express();

const { products } = require('./data')
app.get('/', (req, res) => {
    res.json(products);
        
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})