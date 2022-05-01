import axios from 'axios';

const apiURL = axios.create({
  baseURL: 'http://localhost:3001',
});

const getData = async (endpoint) => {
  // const { data } = await apiURL.get(endpoint);
  const dataMock = {
    total: 10,
    positiva: 5,
    negativa: 3,
    naoAvaliada: 2,
  }
  return dataMock;
};

const sendForms = async (endpoint, body) => {
  // await apiURL.post(endpoint, body);
  console.log(endpoint, body);
}

export {
  getData,
  sendForms,
}