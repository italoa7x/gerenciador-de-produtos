const express = require('express');
const routes = express.Router();
const productController = require('./controllers/ProductController');


routes.get('/products', productController.index);
routes.post('/products', productController.storage);
routes.get('/products/:id', productController.findById);
routes.delete('/products/:id', productController.delete);
routes.put('/products/:id', productController.update);

module.exports = routes;