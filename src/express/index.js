const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;
const products = [];


for (let i = 0; i < 100; i++) {
    products.push({
        id: i,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
    })
}

app.get('/', ((req, res) => res.send('Hello world')));

app.get('/products', ((req, res) => {
    const { id } = req.query;
    if (id) {
        res.json(products[id]);
    } else {
        res.json(products);
    }
}));

app.get('/products/filter', (req, res) => res.send('Filter'));

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json(products[id]);
});


app.get('/categories/:id/products/:productID', ((req, res) => {
    const { id, productID } = req.params;
    res.json(products.filter(e => e.category === parseInt(id) && e.id == productID));
}));

app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No args');
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));