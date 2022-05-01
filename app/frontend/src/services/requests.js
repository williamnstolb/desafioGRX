import axios from 'axios';

const apiURL = axios.create({
  baseURL: 'http://localhost:3001',
});

const getData = async (endpoint) => {
  // const { data } = await apiURL.get(endpoint);
  const dataMock = {
    total: 10,
    Positivas: 5,
    Negativas: 3,
    naoAvaliadas: 2,
  }
  return dataMock;
};

const sendForms = async (endpoint, body) => {
  await apiURL.post(endpoint, body);
}

export {
  getData,
  sendForms,
}