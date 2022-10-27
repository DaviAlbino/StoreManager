const products = require('../models/products.model');

const getAll = async () => {
  const result = await products.getAll();
  return result;
};

const findById = async (id) => { 
  const resultById = await products.findById(id);
  return resultById;
};

module.exports = {
  getAll,
  findById,
};