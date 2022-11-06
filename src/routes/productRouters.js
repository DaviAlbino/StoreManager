const express = require('express');
const controller = require('../controllers/products.controller');
const validateName = require('../middlewares/products.middleware');
// const validatePutName = require('../middlewares/putProduct.middleware');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.findById);
router.post('/', validateName, controller.addNewProduct);
router.put('/:id', validateName, controller.update);
router.delete('/:id', controller.deleteProduct);
// console.log(router.post('/', controller.addNewProduct));

module.exports = router;