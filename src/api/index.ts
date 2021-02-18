import axios from 'axios';
import Config from 'react-native-config';

const API = axios.create({
  baseURL: Config.BASE_URL,
});

export const setApiToken = (token: string): void => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteApiToken = (): void => {
  delete API.defaults.headers.common['Authorization'];
};

export const setRequestLang = ((lang: string = 'ua') => {
  API.defaults.headers.common['Language'] = lang;
})();

export default API;
