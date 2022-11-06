// const camelize = require('camelize');
const camelize = require('camelize');
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

const getAll = async () => { 
  const [sales] = await connection.execute(
    `SELECT s1.sale_id, s1.product_id, s1.quantity, s2.date 
     FROM sales_products AS s1 INNER JOIN sales AS s2
     ON s1.sale_id = s2.id
     ORDER BY s1.sale_id ASC`,
  );

  return camelize(sales);
};

const findById = async (id) => { 
  const [sales] = await connection.execute(
    `SELECT s1.product_id, s1.quantity, s2.date
    FROM sales_products AS s1
    INNER JOIN sales AS s2
    ON s1.sale_id = s2.id
    WHERE s1.sale_id = ?`,
    [id],
  );
  return camelize(sales);
};

const deleteSale = async (id) => { 
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = (?)', [id],
  );
  return affectedRows;
};

module.exports = {
  insert,
  insertProducts,
  getAll,
  findById,
  deleteSale,
};