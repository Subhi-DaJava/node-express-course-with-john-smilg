// 06/10/2022 Middleware

const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res

// 1.use vs root
// 2. options - our own / express / third party


// app.use([ logger, authorize]);
// app.use(logger);
// app.use('/api',logger); // only for api

app.get('/', (req, res) => {
    
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => { // only for this request, middleware function
    console.log(req.user);
    res.send('Items')
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});