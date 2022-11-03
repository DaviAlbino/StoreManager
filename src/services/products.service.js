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

module.exports = {
  getAll,
  findById,
  addNewProduct,
};