const fs = require('fs').promises;

const pathFile = './forms.json';

const createFormsModel = async (forms) => {
  const formsFile = await fs.readFile(pathFile, 'utf8');
  const formsJson = JSON.parse(formsFile);

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
};
