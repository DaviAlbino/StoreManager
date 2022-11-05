const salesValidate = (req, res, next) => {
  const salesList = req.body;

  const checkProduct = salesList.some((sale) => !sale.productId);
  const checkQuantity = salesList.some((sale) => !sale.quantity && sale.quantity !== 0);
  const checkQuantityNumber = salesList.some((sale) => sale.quantity <= 0);

  if (checkProduct) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (checkQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (checkQuantityNumber) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = salesValidate;