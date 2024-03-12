// api.js
import axios, {Method} from 'axios';

const BASE_URL = 'http://localhost:8081';

interface RequestParams {
  url: string;
  method: Method;
  data?: any;
}

// // Create an Axios instance with base configurations
// const api = axios.create({
//   baseURL: 'http://localhost:8081', // Your backend base URL
//   headers: {
//     'Content-Type': 'application/json',
//     // Add any other headers here
//   },
//   // Add any other Axios configurations here
// });

// Function to handle making API requests
export const request = async ({ url, method, data }: RequestParams) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      data,
      headers: {
        'Content-Type':'application/json',
      }
    });
    if (response.data.errno !== 0) {
      const errorMsg = response.data.errmsg || 'An unknown error occurred';
      // Throw an error to be caught by the catch block
      throw new Error(errorMsg);
    }
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};