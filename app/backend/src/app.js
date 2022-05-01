const express = require('express');
const bodyParser = require('body-parser');
const { createForms, getForms } = require('./controllers/formsController');
<<<<<<< HEAD
const Cors = require('cors');

const app = express();
  app.use(bodyParser.json());
  app.use(Cors());
=======
const cors = require('cors');

const app = express();
  app.use(bodyParser.json());
  app.use(cors());
>>>>>>> 4ea2d020e86ab88076031b8b5a12b37f801d3201

  app.post('/forms', createForms);
  app.get('/forms', getForms);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log('Listening on port 3001');
  }
);
