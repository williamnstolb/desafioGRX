const { createFormsModel, getFormsModel } = require('../database/models/formsModel');
const calcData = require('../utils/calcData');

const createFormsService = async (forms) => {
  // const quantValidate = calcQuantity(forms);
  // if(!quantValidate) return { errCode: 400, message: 'Valores inválidos' };

  // const { error } = dataValidation.validate({ ...forms });
  // if (error) return { errCode: 400, message: error.message };

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
