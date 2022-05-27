import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000';

export const login = async ({ username, password }) => {
  const res = await axios.post(`${baseUrl}/api/login`, { username, password })
  return res?.data || null;
}