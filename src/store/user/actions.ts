import API from 'api';
import {IServerImageProps} from 'components/picker/UserAvatar';
import {setIsMasterValue} from 'store/auth';
import {IUser} from 'store/auth/types';
import {setError} from 'store/error/actions';

import {SET_USER} from './types';

const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const getProfile = () => (dispatch: any) => {
  API.get('/user')
    .then((res) => {
      const {success, data} = res.data;

      if (success) {
        dispatch(setUser(data));
        dispatch(setIsMasterValue(data.specialist_id !== null ? 1 : 0));
      }
    })
    .catch((e) => {
      console.log('Error get profile', e);
    });
};

export const updateProfile = (data: IUser) => (dispatch: any) => {
  API.post('/user/save/directly', data)
    .then((res) => console.log(res))
    .catch((e) => console.log('Error', e));
};

export const updateAvatar = ({
  image,
  avatar = true,
}: {
  image: IServerImageProps;
  avatar?: boolean;
}) => (dispatch: any) => {
  API.post('/photo/add', {image, avatar})
    .then((res) => console.log(res))
    .catch((e) => console.log('Error', e));
};

export const changePassword = (
  data: {
    new_password: string;
    old_password: string;
  },
  onSuccess: () => void,
) => (dispatch: any) => {
  API.post('/change/password', data)
    .then((res) => {
      onSuccess();
    })
    .catch((e) => {
      const {message, errors} = e.response.data;

      dispatch(setError({message, errors}));
    });
};
