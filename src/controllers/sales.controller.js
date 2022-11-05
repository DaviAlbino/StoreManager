const sales = require('../services/sales.service');

const createSale = async (req, res) => { 
  const salesList = req.body;

  const { type, message } = await sales.createSale(salesList);

  if (type === 'error') {
    return res.status(404).json({ message });
  }

  return res.status(201).json({ id: message, itemsSold: salesList });
};

module.exports = {
  createSale,
};