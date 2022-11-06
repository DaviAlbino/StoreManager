const sales = [
  {
    saleId: 1,
    date: new Date(Date.now()).toISOString(),
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: new Date(Date.now()).toISOString(),
    productId: 4,
    quantity: 2
  }
];

const newSale = [
  {
    productId: 1,
    quantity: 5
  },
  {
    productId: 4,
    quantity: 2
  }
];

const notASale = [
  {
    productId: 145,
    quantity: 5
  },
  {
    productId: 4,
    quantity: 2
  }
];

module.exports = {
  sales, 
  newSale,
  notASale,
};