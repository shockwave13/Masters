import API from 'api';
import {SET_FAVORITES} from './types';

export const setFavorites = (data: any[]) => ({
  type: SET_FAVORITES,
  payload: data,
});

export const getFavorites = () => (dispatch: any) => {
  API.get('like/get')
    .then((res) => {
      const {data} = res.data;
      dispatch(setFavorites(data));
    })
    .catch((e) => console.log('Get Favorites error', e));
};
