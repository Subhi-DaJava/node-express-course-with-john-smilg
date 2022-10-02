// 02/10/2022

const express = require('express');
const path = require('path');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Paga</h1> <a href="/api/products">products</a>'); // return the page
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => { // return the product without descprition
        const { id, name, image } = product;
        return {id, name, image};
    })
    res.json(newProducts)
})

// app.get('/api/products/1', (req, res) => {
//    const singlePorduct = products.find((product) => product.id === 1)
//    res.json(singlePorduct);
// })
app.get('/api/products/:productID', (req, res) => {
    //console.log(req);
    //console.log(req.params);
    const { productID } = req.params;
    const singlePorduct = products.find(
        (product) => product.id === Number(productID));
        if(!singlePorduct) {
            return res.status(404).send('Product Does not exist!');
        }
    //console.log(singlePorduct); //undefined before if statement
    res.json(singlePorduct);
 })

 app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello world, and complex http!');
 })

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})