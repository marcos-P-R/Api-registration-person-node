const express = require('express');
const routerPerson = require('./routerPerson');

module.exports = app => {
    app.use(
        express.json(),
        routerPerson
    );
}