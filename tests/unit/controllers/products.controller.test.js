const { expect } = require('chai');
const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const mockProducts = require('../mocks/products.mocks.test');

// chai.use(sinonChai);

describe('Teste da camada controllers', () => { 

  it('Retorna status de sucesso', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'getAll')
      .resolves({
        type: null, message: mockProducts
      });
       
    
    const lista = await productsController.getAll(req, res);

    console.log(lista)

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith()).to.be.true;
  });
  afterEach(sinon.restore);
});