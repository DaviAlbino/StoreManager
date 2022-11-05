const connection = require('./connection');

const insert = async () => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUES ()',
  );
  return insertId;
};

const insertProducts = async (productId, saleId, quantity) => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id,sale_id,quantity) VALUES (?,?,?)',
    [productId, saleId, quantity],
  );
  return insertId;
};

// const getAll = async () => { 
//   const [sales] = await connection.execute(
//     'SELECT '
//   );
// };

module.exports = {
  insert,
  insertProducts,
};