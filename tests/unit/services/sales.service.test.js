const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesService = require('../../../src/services/sales.service');
const productsModel = require('../../../src/models/products.model');
const salesModel = require('../../../src/models/sales.model');

const { sales, newSale, notASale } = require('../mocks/sales.mocks.test');
const mockProducts = require('../mocks/products.mocks.test');

describe('Testes de sales na camada service', () => { 
  it('testar get de todos os sales', async () => { 
    sinon.stub(salesModel, 'getAll').resolves(sales);
    const data = await salesService.getAll();
    expect(data).to.deep.equal(sales);
  });

  it('testar o get de uma sale', async () => {
    sinon.stub(salesModel, 'findById').resolves(sales[0]);

    const data = await salesService.findById(1);
    expect(data).to.deep.equal(sales[0])
  });

  it('testar o delete de uma sale', async () => {
    sinon.stub(salesModel, 'deleteSale').resolves(1);
    const data = await salesService.deleteSale(1);
    expect(data).to.deep.equal({ type: null, message: 1 });
  });

  it('testar o delete sem sucesso da sale', async () => { 
    sinon.stub(salesModel, 'deleteSale').resolves(0);
    const data = await salesService.deleteSale(39)
    expect(data.message).to.deep.equal('Sale not found');
  });

  // it('teste do createSale', async () => {
  //   sinon.stub(productsModel, 'findById').resolves(mockProducts[0]);
  //   const newSaleInput = newSale;
  //   const data = await salesService.createSale(newSaleInput);
  //   expect(data.type).to.deep.equal(null);
  // });

  afterEach(sinon.restore);
});