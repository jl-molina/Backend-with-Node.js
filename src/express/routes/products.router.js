const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
    const products = service.find();
    res.json(products);
});

router.get('/filter', (req, res) => res.send('Filter'));

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    product ? res.json(product) : res.status(404).json({message: 'Not found'});
});

router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data: body
    })
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'update patch',
        data: body,
        id
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'deleted',
        id
    });
});

module.exports = router;