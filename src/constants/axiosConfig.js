import axios from 'axios';
import {BASE_URL} from '@env';

console.log(BASE_URL, 'process.env.BASE_URL');
export default axios.create({
  baseURL: BASE_URL,
});
