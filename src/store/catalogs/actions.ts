import API from 'api';
import {SET_CATALOG} from './types';

import {IAction} from '../types';
import {AxiosError, AxiosResponse} from 'axios';

const setCatalog = (field: string, value: any): IAction => ({
  type: SET_CATALOG,
  payload: {
    field,
    value,
  },
});

export const getCategories = (city: string = '') => (dispatch: any) => {
  let response: any;

  if (city) {
    response = API.get(`/categories?city=${city}`);
  } else {
    response = API.get(`/categories`);
  }
  response
    .then((res: AxiosResponse) => {
      const response = res.data;

      dispatch(setCatalog('categories', response.data));
    })
    .catch((e: AxiosError) => {
      console.log('Get categories error', e);
    });
};

export const getCategory = (query: string) => (dispatch: any) => {
  API.get(`/category/query?p=${query}`);
};

export const getNotification = () => (dispatch: any) => {
  API.get('get/unread/notification');
};

export const getSpecialists = () => (dispatch: any) => {};

export const getServices = () => (dispatch: any) => {
  API.get('/specialists/category')
    .then((res) => {
      const {data} = res.data;
      dispatch(setCatalog('services', data.categories));
    })
    .catch((e) => console.log('Error', e));
};

export const getServiceDetail = (id: number) => (dispatch: any) => {
  API.get(`/specialist/service/get?category_id=${id}`)
    .then((res) => {
      const {data} = res.data;
      dispatch(setCatalog('service', data));
    })
    .catch((e) => {
      console.log('Error', e);
    });
};
