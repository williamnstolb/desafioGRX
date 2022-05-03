import axios from 'axios';
import env from 'react-dotenv'

const apiURL = axios.create({
  baseURL: env.REACT_APP_API_URL,
});

const getData = async (endpoint) => {
  const { data } = await apiURL.get(endpoint);
  return data;
};

const sendForms = async (endpoint, body) => {
  await apiURL.post(endpoint, body);
}

export {
  getData,
  sendForms,
}