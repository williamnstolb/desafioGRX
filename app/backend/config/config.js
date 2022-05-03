require('dotenv').config();

const { 
 PORT,
 PATHNAME,
 PATHNAME_TEST
} = process.env;

module.exports = {
  development: {
    pathname: PATHNAME,
    PORT: PORT
  },
  test: {
    pathname: PATHNAME_TEST,
    PORT: PORT
  },
  production: {
    pathname: PATHNAME,
    PORT: PORT
  },
}; 