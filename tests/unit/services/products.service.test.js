const { expect } = require('chai');
const sinon = require('sinon');

// const connection = require('../../../src/models/connection');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const mockProducts = require('../mocks/products.mocks.test');

describe('Testes do serviço da aplicação', () => {
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

  it('teste do post de produto', async () => {
    sinon.stub(productsModel, 'addNewProduct').resolves(7);
    const data = await productsService.addNewProduct('Harry Potter - Cálice de fogo');
    expect(data).to.be.deep.equal({ type: null, message: 7 })
  });

  it('teste do put do produto', async () => {
    sinon.stub(productsModel, 'update').resolves(4);
    const data = await productsModel.update(4, 'Suvinil');
    expect(data).to.be.deep.equal(4);
  });

  it('teste do put do produto', async () => {
    sinon.stub(productsModel, 'update').resolves({ type: 'error', message: 'Product not found' });
    const data = await productsModel.update();
    expect(data).to.be.deep.equal({ type: 'error', message: 'Product not found' });
  });
  afterEach(sinon.restore);
});