const { createFormsModel } = require('../models/formsModel');

const createFormsService = async (forms) => {
  // const quantValidate = calcQuantity(forms);
  // if(!quantValidate) return { errCode: 400, message: 'Valores inválidos' };

  // const { error } = dataValidation.validate({ ...forms });
  // if (error) return { errCode: 400, message: error.message };

  const updatedFile = await createFormsModel(forms);  
  return updatedFile;
};