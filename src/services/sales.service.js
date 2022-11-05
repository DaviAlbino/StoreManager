const sales = require('../models/sales.model');
const products = require('../models/products.model');

const createSale = async (salesList) => { 
  const promiseProduct = salesList.map((p) => products.findById(p.productId));
  const result = await Promise.all(promiseProduct);
  const checkResult = result.some((s) => s === undefined);

  if (checkResult) {
    return {
      type: 'error',
      message: 'Product not found',
    };
  }

  const salesId = await sales.insert();

  await Promise.all(salesList
    .map(({ productId, quantity }) => sales.insertProducts(productId, salesId, quantity)));

  return {
    type: null,
    message: salesId,
  };
};

const getAll = async () => { 
  const salesList = await sales.getAll();
  return salesList;
};

const findById = async (id) => { 
  const sale = await sales.findById(id);
  return sale;
};

module.exports = {
  createSale,
  getAll,
  findById,
};