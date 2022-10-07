// 06/10/2022 Middleware

const express = require('express');
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);  // GET / 2022
    //res.send('Testing');
    next();

}

app.get('/', logger, (req, res) => {
    
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});