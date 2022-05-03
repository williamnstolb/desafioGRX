const fs = require('fs').promises;

const pathFile = './src/database/forms.json';

const getFormsModel = async () => {
  const formsFile = await fs.readFile(pathFile, 'utf8');
  const formsJson = JSON.parse(formsFile);
  return formsJson;
}

const createFormsModel = async (forms) => {
  const formsJson = await getFormsModel();

  const idFree = formsJson.length + 1;
  const newForms = {
    id: idFree,
    ...forms,
  };
  formsJson.push(newForms);
  await fs.writeFile(pathFile, JSON.stringify(formsJson));
  return formsJson;
}

module.exports = {
  createFormsModel,
  getFormsModel,
};
