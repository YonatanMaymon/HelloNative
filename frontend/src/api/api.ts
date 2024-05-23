import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signUp = (formData: { username: string; password: string }) =>
  API.post('/auth/signup', formData);
export const logIn = (formData: { username: string; password: string }) =>
  API.post('/auth/login', formData);
