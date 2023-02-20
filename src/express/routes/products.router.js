const express = require('express');
const faker = require('faker');
const router = express.Router();

const products = [];
    for (let i = 0; i < 100; i++) {
        products.push({
            id: i,
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })
    }

router.get('/', (req, res) => {
    const { id } = req.query;
    if (id) {
        res.json(products[id]);
    } else {
        res.json(products);
    }
});

router.get('/filter', (req, res) => res.send('Filter'));

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(products[id]);
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    })
});

module.exports = router;