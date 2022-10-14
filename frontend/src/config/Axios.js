import axios from 'axios';
const connection = axios.create({baseURL:`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`});

export default connection;
