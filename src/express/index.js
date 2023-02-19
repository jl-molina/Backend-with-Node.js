const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
const products = [];

app.get('/', ((req, res) => res.send('Hello world')));

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

routerApi(app);

app.listen(port, () => console.log(`Listening on port ${port}`));