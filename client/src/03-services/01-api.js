import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const reviewCode = async (code, language) => {
  const response = await axios.post(`${API_BASE_URL}/review`, { code, language });
  return response.data;
};