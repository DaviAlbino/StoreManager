const express = require('express');
const controller = require('../controllers/products.controller');
const validateName = require('../middlewares/products.middleware');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.findById);
router.post('/', validateName, controller.addNewProduct);
// console.log(router.post('/', controller.addNewProduct));

module.exports = router;