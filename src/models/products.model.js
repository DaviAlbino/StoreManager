const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
};

const findById = async (id) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return products;
};

const addNewProduct = async (product) => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
  );
  console.log(insertId);
  return insertId;
};

const update = async (id, name) => { 
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id],
  );
  
  if (result.affectedRows === 1) {
    return { id, name };
  }

  return null;
};

const deleteProduct = async (id) => { 
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );

  return affectedRows;
};

module.exports = {
  getAll,
  findById,
  addNewProduct,
  update,
  deleteProduct,
};
