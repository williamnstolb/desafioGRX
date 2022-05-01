const { createFormsModel, getFormsModel } = require('../database/models/formsModel');
const calcData = require('../utils/calcData');
const dataValidation = require('../schemas/dataValidation');

const createFormsService = async (forms) => {
  const { error } = dataValidation.validate({ ...forms });
  if (error) return { errCode: 400, message: error.message };

  // const quantValidate = calcQuantity(forms);
  // if(!quantValidate) return { errCode: 400, message: 'Valores inválidos' }; 

  const updatedFile = await createFormsModel(forms);  
  return updatedFile;
};

const getFormsService = async () => {
  const result = await getFormsModel();
  const resultForms = calcData(result);
  
  return resultForms;
};


module.exports = {
  createFormsService,
  getFormsService,
};
