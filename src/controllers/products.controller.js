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
  const { name } = req.body;
  const { message } = await service.addNewProduct(name);
  return res.status(201).json({ id: message, name });
};

const update = async (req, res) => { 
  const { name } = req.body;
  const { id } = req.params;
  const updatedId = await service.update(Number(id), name);

  if (updatedId.type) {
    return res.status(404).json({ message: updatedId.message });
  }

  return res.status(200).json({ id: updatedId.id, name });
};

const deleteProduct = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await service.deleteProduct(id);
  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};
module.exports = {
  getAll,
  findById,
  addNewProduct,
  update,
  deleteProduct,
};
