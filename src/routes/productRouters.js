const express = require('express');
const controller = require('../controllers/products.controller');
const validateName = require('../middlewares/products.middleware');
const validatePutName = require('../middlewares/putProduct.middleware');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.findById);
router.get('/search', controller.findBySearch);
router.post('/', validateName, controller.addNewProduct);
router.put('/:id', validatePutName, controller.update);
router.delete('/:id', controller.deleteProduct);

module.exports = router;