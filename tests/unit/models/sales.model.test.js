const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');

const connection = require('../../../src/models/connection');
const { sales, newSale, notASale } = require('../mocks/sales.mocks.test');

describe('Testes da model vendas', () => {
  afterEach(sinon.restore);
  it('Teste do post da venda', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 45 }])
    sinon.stub(connection, 'query').resolves();
    const data = await salesModel.insert();
    expect(data).to.equal(45);
  });

  it('teste do get da lista de vendas', async () => {
    sinon.stub(connection, 'execute').resolves([sales]);
    const data = await salesModel.getAll();
    expect(data).to.be.deep.equal(sales);
  });

  it('teste do get a partir do id', async () => {
    sinon.stub(connection, 'execute').resolves([[sales[0]]]);
    const data = await salesModel.findById(1);
    expect(data).to.be.deep.equal([sales[0]]);
  });

  it('teste do delete da venda', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 3, affectedRows: 1 }]);
    const data = await salesModel.deleteSale(3);
    expect(data).to.equal(1);
  });

  it('teste do delete de produto inexistente', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 9, affectedRows: 0 }])
    let erro = null

    const data = await salesModel.deleteSale(9)

    expect(data).to.be.equal(0);
  });
})