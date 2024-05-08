import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://94.74.86.174:8080/api',
});

export default Axios;
