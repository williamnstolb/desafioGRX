const { expect } = require('chai');

const { bodyCorrectToCreate } = require('./mock/databaseMocked');
const { createFormsModel, getFormsModel } = require('../database/models/formsModel');

describe('Teste unitário da camada Models', () => {
  describe('Teste do createFormsModel', async () => {
    it('Deve possuir um ID', async () => {
      const formsFile = await createFormsModel(bodyCorrectToCreate);
      const lastIndex = formsFile.length - 1;
      expect(formsFile[lastIndex]).to.have.property('id');
    });

    it('Deve retornar um array', async () => {
      const formsFile = await createFormsModel(bodyCorrectToCreate);
      expect(formsFile).to.be.an('array');
    });
  });

  describe('Teste do getFormsModel', async () => {
    it('Deve retornar um array', async () => {
      const formsFile = await getFormsModel();
      expect(formsFile).to.be.an('array');
    });
  })
}); 
