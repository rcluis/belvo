import axios from 'axios';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use((response) => {
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  return Promise.resolve(response.data);
});

export default instance;
