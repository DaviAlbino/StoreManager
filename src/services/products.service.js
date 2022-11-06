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

const update = async (name, id) => {
  const data = await products.update(name, id);
  console.log(data);

  if (data === 0) return { type: 'error', message: { message: 'Product not found' } };
  return { type: null, message: { id, name } };
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