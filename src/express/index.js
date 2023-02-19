const express = require('express');
const app = express();
const port = 3000;

const categories = [
    {
        id: 1,
        name: 'electronics'
    },
    {
        id: 2,
        name: 'clothes'
    }
]

const products = [
    {
        id: 1,
        name: 'product1',
        price: 1000,
        category: 1
    },
    {
        id: 1,
        name: 'product2',
        price: 2000,
        category: 2
    },
    {
        id: 2,
        name: 'product3',
        price: 2000,
        category: 2
    },
    {
        id: 2,
        name: 'product4',
        price: 2000,
        category: 1
    }
];

app.get('/', ((req, res) => res.send('Hello world')));

app.get('/products', ((req, res) => {
    res.json(products);
}));

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json(products[id]);
})

app.get('/categories/:id/products/:productID', ((req, res) => {
    const { id, productID } = req.params;
    res.json(products.filter(e => e.category === parseInt(id) && e.id == productID));
}));

app.listen(port, () => console.log(`Listening on port ${port}`));