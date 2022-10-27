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

module.exports = {
  getAll,
  findById,
};
