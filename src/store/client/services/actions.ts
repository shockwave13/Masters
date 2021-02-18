import API from 'api';
import {IStore} from 'store/types';
import {SET_SERVICES, SET_SPECIALIST_SERVICES} from './types';

export const setServices = (data: any[]) => ({
  type: SET_SERVICES,
  payload: data,
});

export const setSpecialistsServices = (data: any) => ({
  type: SET_SPECIALIST_SERVICES,
  payload: data,
});

export const getServices = (location: string = 'Kyiv') => (dispatch: any) => {
  API.get(`categories?city=${location}`)
    .then((res) => {
      const {data} = res.data;
      dispatch(setServices(data));
    })
    .catch((e) => console.log('Error services ', e));
};

interface IFilterData {
  categoryId: number;
  minPrice?: number;
  maxPrice?: number;
  subCategoryId: number;
}

export const getFilteredSpecialists = ({
  categoryId,
  minPrice = 0,
  maxPrice = 0,
  subCategoryId,
}: IFilterData) => (dispatch: any, getState: () => IStore) => {
  const {id} = getState().user.user;
  API.get(
    `specialists?p=${categoryId}&min_price=${minPrice}&max_price=${maxPrice}&user_id=${id}`,
  )
    .then((res) => {
      const {data} = res.data;

      dispatch(setSpecialistsServices(data[subCategoryId].specialists));
    })
    .catch((e) => console.log('Error', e));
};
