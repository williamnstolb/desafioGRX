const express = require('express');
const bodyParser = require('body-parser');

const app = express();
  app.use(bodyParser.json());

  app.post('/forms', (req, res) => {
    res.send('Hello World!');
  });


  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log('Listening on port 3001');
  }
);
