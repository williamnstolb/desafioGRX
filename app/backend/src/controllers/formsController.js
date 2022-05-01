const rescue = require('express-rescue');
const { createFormsService } = require('../services/formsService');

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

module.exports = {
  createForms,
};
