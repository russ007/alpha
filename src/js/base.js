import axios from 'axios';
import {URLbase} from './config';
export const axiosInst = axios.create({
    baseURL: URLbase
  });