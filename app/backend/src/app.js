const express = require('express');
const bodyParser = require('body-parser');
const { createForms, getForms } = require('./controllers/formsController');

const app = express();
  app.use(bodyParser.json());

  app.post('/forms', createForms);
  app.get('/forms', getForms);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log('Listening on port 3001');
  }
);
