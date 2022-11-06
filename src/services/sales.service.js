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

const deleteSale = async (id) => { 
  const deleted = await sales.deleteSale(id);
  if (deleted === 0) {
    return { type: 'error', message: 'Sale not found' };
  }
  return { type: null, message: deleted };
};

module.exports = {
  createSale,
  getAll,
  findById,
  deleteSale,
};