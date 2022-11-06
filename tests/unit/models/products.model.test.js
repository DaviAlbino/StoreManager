const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const mockProducts = require('../mocks/products.mocks.test');

describe('Testes do Modelo da aplicação', () => {
  afterEach(sinon.restore);
  it('Mostrar Lista de produtos', async () => { 
    sinon.stub(connection, 'execute').resolves([mockProducts]);
    const response = await productsModel.getAll();
    expect(response).to.deep.equal(mockProducts);
  });

  it('Mostrar produto por id', async () => {
    sinon.stub(connection, 'execute').resolves([[mockProducts[1]]]);
    const response = await productsModel.findById(2);
    expect(response).to.deep.equal(mockProducts[1]);
  });

  it('Cadastro de produto', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 45 }]);
    const response = await productsModel.addNewProduct("Escudo");
    expect(response).to.equal(45);
  });

  it('teste do put de um produto', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 3, affectedRows: 1 }]);
    const response = await productsModel.update(3, 'Saxofone');
    expect(response).to.deep.equal({ id: 3, name: 'Saxofone' });
  });

  it('teste do put de um produto inexistente', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 8, affectedRows: 0 }]);
    let erro = null
   
    const data = await productsModel.update(8)
    expect(data).to.equal(null);
  });

  it('teste do delete', async () => { 
    sinon.stub(connection, 'execute').resolves([{ insertId: 2, affectedRows: 1 }]);
    const data = await productsModel.deleteProduct(2);
    expect(data).to.equal(1);
  });
});