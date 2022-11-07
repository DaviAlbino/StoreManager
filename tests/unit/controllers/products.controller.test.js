const { expect } = require('chai');
const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const { mockProducts, createProduct, updateProduct } = require('../mocks/products.mocks.test');

// chai.use(sinonChai);

describe('Teste da camada controllers', () => { 

  it('Retorna status de sucesso', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'getAll')
      .resolves(mockProducts);
       
    
    const lista = await productsController.getAll(req, res);

    console.log(lista)

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mockProducts)).to.be.true;
  });

  it('Teste do controller do product by id', async () => { 
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findById').resolves(mockProducts[0]);
    await productsController.findById(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mockProducts[0])).to.be.true;
  });

  it('teste do post do controller de product', async () => { 
    const req = { body: { name: "ProdutoX" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'addNewProduct').resolves(createProduct);
    await productsController.addNewProduct(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    // expect(res.json.calledWith(createProduct)).to.be.true;
  });

  it('teste do put do controller de product', async () => {
    const req = {
      params: { id: 2 },
      body: { name: "ProdutoY" }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'update').resolves(updateProduct);
    await productsController.update(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    // expect(res.json.calledWith(createProduct)).to.be.true;
  });

  afterEach(sinon.restore);
});