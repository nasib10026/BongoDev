//ekhane axios ke configure korbo

import axios from "axios";

//axios ekta library jeta amake http request korte help korbe.Base url diye dile barbar config kora lagbe na
export const http = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 3000,
    headers: {'Content-Type':'application/json'}
  });
