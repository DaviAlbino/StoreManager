const express = require('express');
const controller = require('../controllers/products.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.findById);
router.post('/', controller.addNewProduct);
// console.log(router.post('/', controller.addNewProduct));

module.exports = router;