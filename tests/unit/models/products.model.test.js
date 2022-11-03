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
});