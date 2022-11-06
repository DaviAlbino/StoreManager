const sales = require('../services/sales.service');

const createSale = async (req, res) => { 
  const salesList = req.body;

  const { type, message } = await sales.createSale(salesList);

  if (type === 'error') {
    return res.status(404).json({ message });
  }

  return res.status(201).json({ id: message, itemsSold: salesList });
};

const getAll = async (req, res) => {
  const salesList = await sales.getAll();
  return res.status(200).json(salesList);
};

const findById = async (req, res) => { 
  const { id } = req.params;
  const saleById = await sales.findById(Number(id));
  if (saleById.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return res.status(200).json(saleById);
};

const deleteSale = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await sales.deleteSale(Number(id));
  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};

module.exports = {
  createSale,
  getAll,
  findById,
  deleteSale,
};