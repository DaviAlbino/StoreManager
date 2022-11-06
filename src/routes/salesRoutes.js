const express = require('express');

const sales = require('../controllers/sales.controller');

const salesValidate = require('../middlewares/sales.middleware');

const salesRouter = express.Router();

salesRouter.post('/', salesValidate.salesValidate, sales.createSale);
salesRouter.get('/', sales.getAll);
salesRouter.get('/:id', sales.findById);
salesRouter.delete('/:id', sales.deleteSale);

module.exports = salesRouter;