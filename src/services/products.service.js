const products = require('../models/products.model');

const getAll = async () => {
  const result = await products.getAll();
  return result;
};

const findById = async (id) => { 
  const resultById = await products.findById(id);
  return resultById;
};

const addNewProduct = async (product) => { 
  const newProduct = await products.addNewProduct(product);
  return {
    type: null,
    message: newProduct,
  };
};

const update = async (id, name) => {
  const updatedId = await products.update(id, name);
  if (!updatedId) return { type: 'error', message: 'Product not found' };
  
  return updatedId;
};

const deleteProduct = async (id) => { 
  const deleted = await products.deleteProduct(id);
  if (deleted === 0) {
    return { type: 'error', message: 'Product not found' };
  }
  return { type: null, message: deleted };
};

module.exports = {
  getAll,
  findById,
  addNewProduct,
  update,
  deleteProduct,
};