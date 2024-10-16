// src/api.js
import axios from "axios";

const API_URL = "http://192.168.18.6:5000/api/auth"; // Update with your API base URL

export const loginUser = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};
