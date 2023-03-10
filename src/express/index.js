const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

const { logErrors, errorHandler } = require('./middlewares/error.handler');

app.use(express.json());
routerApi(app);
app.use(logErrors);
app.use(errorHandler);
app.listen(port);