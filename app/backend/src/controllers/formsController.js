const rescue = require('express-rescue');
const { createFormsService, getFormsService } = require('../services/formsService');

const createForms = rescue(async (req, res) => {
  const forms = req.body;
  const updatedFile = await createFormsService(forms);
  
  // if(updatedFile.errCode) {
  //   const { errCode, message } = updatedFile;
  //   return res.status(errCode).json({
  //     error: message,
  //   });
  // }
  res.status(201).json(updatedFile);
});

const getForms = rescue(async (req, res) => {
  const result = await getFormsService();
  res.status(200).json(result);
});

module.exports = {
  createForms,
  getForms
};
