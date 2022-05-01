import axios from 'axios';

const apiURL = axios.create({
  baseURL: 'http://localhost:3001',
});

const getData = async (endpoint) => {
  const { data } = await apiURL.get(endpoint);
  console.log(data);
  return data;
};

const sendForms = async (endpoint, body) => {
  await apiURL.post(endpoint, body);
}

export {
  getData,
  sendForms,
}