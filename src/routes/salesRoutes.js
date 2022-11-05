const express = require('express');

const sales = require('../controllers/sales.controller');

const salesValidate = require('../middlewares/sales.middleware');

const salesRouter = express.Router();

salesRouter.post('/', salesValidate, sales.createSale);

module.exports = salesRouter;