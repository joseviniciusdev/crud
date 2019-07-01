import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://reqres.in/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default Axios