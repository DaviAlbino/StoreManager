const { expect } = require('chai');
const sinon = require('sinon');

// const connection = require('../../../src/models/connection');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const mockProducts = require('../mocks/products.mocks.test');

describe('Testes do serviço da aplicação', () => {
  afterEach(sinon.restore);
  it('Mostrar Lista de produtos', async () => {
    sinon.stub(productsModel, 'getAll').resolves(mockProducts);
    const response = await productsService.getAll();
    expect(response).to.deep.equal(mockProducts);
  });

  it('Mostrar produto por id', async () => {
    sinon.stub(productsModel, 'findById').resolves(mockProducts[1]);
    const response = await productsService.findById(2);
    expect(response).to.deep.equal(mockProducts[1]);
  });
});