const service = require('../services/products.service');

const getAll = async (_req, res) => { 
  const products = await service.getAll();

  if (!products) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }

  return res.status(200).json(products);
};

const findById = async (req, res) => { 
  const id = Number(req.params.id);
  const products = await service.findById(id);
  if (!products) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }

  return res.status(200).json(products);
};

const addNewProduct = async (req, res) => { 
  console.log('body', req.body);
  const { name } = req.body;
  const { message } = await service.addNewProduct(name);
  return res.status(201).json({ id: message, name });
};

module.exports = {
  getAll,
  findById,
  addNewProduct,
};
