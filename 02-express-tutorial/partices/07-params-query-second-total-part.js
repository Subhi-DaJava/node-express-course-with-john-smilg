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

 // https://hn.algolia.com/api 
 app.get('/api/v1/query', (req, res) => { // http://localhost:5000/api/v1/query?name=john&id=4
    const { search, limit } = req.query;
    console.log(req.query);  // { name: 'john', id: '4' }
    // http://localhost:5000/api/v1/query?search=a&limit=2 => { search: 'a', limit: '2' } 
    let sortedProducts = [...products]
    
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1) {
        // res.status(200).send('No products matched your search!');
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);

    //res.send('Hello world !')
 }) 

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});