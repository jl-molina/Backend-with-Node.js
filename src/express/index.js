const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
const products = [];

app.use(express.json());
routerApi(app);
app.listen(port, () => console.log(`Listening on port ${port}`));