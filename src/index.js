const express = require('express');
const routes = require('./router');

const app = express();
const port = 3000;

routes(app);

app.listen(port, ()=> console.log(`Servidor funcionando na porta ${port}`))