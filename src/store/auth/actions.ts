import API, {setApiToken} from 'api';
import {setError} from 'store/error/actions';
import {IStore} from 'store/types';

import {
  IUser,
  SET_TOKEN,
  SET_AUTH,
  SET_VALUE,
  SET_IS_MASTER,
  ICreateMasterData,
} from './types';
import {navigationRef} from 'RootNavigation';

const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

const setAuth = (status: boolean) => ({
  type: SET_AUTH,
  payload: status,
});

export const setSignUpValue = (field: string, value: any) => ({
  type: SET_VALUE,
  payload: {
    field,
    value,
  },
});

export const setIsMasterValue = (isMaster: number) => ({
  type: SET_IS_MASTER,
  payload: isMaster,
});

export const signIn = (data: IUser) => (dispatch: any) => {
  API.post('/login', data)
    .then((res) => {
      const {success, data} = res.data;
      if (success) {
        setApiToken(data.token);
        dispatch(setToken(data.token));
        dispatch(setAuth(success));
      }
    })
    .catch((e) => {
      const {success, message, errors} = e.response.data;

      dispatch(setError({message, errors}));
      dispatch(setAuth(success));
    });
};

export const signUp = (
  data: IUser,
  onSuccess: (phone: string) => void,
) => async (dispatch: any) => {
  const {phone} = data;
  var isUserExist = false;
  if (phone) {
    isUserExist = await dispatch(checkPhone(phone));
  }

  if (isUserExist) {
    dispatch(
      setError({
        message: 'Sorry but user exist',
        errors: {
          phone: 'Sorry but this user currently exist',
        },
      }),
    );
  } else {
    dispatch(sendCodeOnPhone(phone, onSuccess));
  }
};

export const checkPhone = (phone: string) => (dispatch: any) => {
  return API.get(`/check/phone?phone=${phone}`).then((res) => {
    const {success, data, message} = res.data;
    return !(data === null);
  });
};

export const sendCodeOnPhone = (
  phone: string,
  onSuccess: (phone: string) => void,
) => (dispatch: any) => {
  API.get(`/sendCode?phone=${phone}`).then(() => {
    onSuccess(phone);
  });
};

export const submitSignUp = (
  phone: string,
  code: string,
  data: any,
  navigation: any,
) => (dispatch: any, getState: any) => {
  const {isMaster} = getState().auth;
  API.post('/checkCode', {phone, code})
    .then((res) => {
      const {code: responseCode} = res.data.data;

      if (responseCode === 'ok') {
        API.post('/registration', data)
          .then((res) => {
            const {data} = res.data;
            const userId = data.id;
            dispatch(setSignUpValue('user_id', userId));

            if (res.status === 200 || res.status === 201) {
              isMaster
                ? navigation.navigate('SignUpMaster')
                : dispatch(setAuth(true));
            }
          })
          .catch((e) => {
            console.log('registartion', e);
            dispatch(setError(e.response.data));
          });
      } else {
        navigation.goBack();
      }
    })
    .catch((e) => {
      dispatch(setError(e.response.data));
    });
};

const validateData = (data: ICreateMasterData) => {
  for (let key in data) {
    switch (key) {
      case 'at_home':
      case 'category_id':
      case 'geo':
      case 'on_depature':
      case 'radius':
      case 'show_full':
      case 'user_id':
      case 'id': {
        data[key] = JSON.stringify(data[key]);
        break;
      }
      default:
        null;
    }
  }

  return data;
};

export const createSpecialist = () => (
  dispatch: any,
  getState: () => IStore,
) => {
  const {createMasterState: data} = getState().auth;
  const formatData = validateData(data);

  API.post('/create_spec', formatData)
    .then((res) => {
      const {success} = res.data;

      if (success) {
        navigationRef.current?.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        });
      }
    })
    .catch((e) => {
      console.log('Error create specialist', e);
    });
};

export const resetPassword = (typeUser, value) => (dispatch) => {
  console.log(typeUser, value);
  if (typeUser === 'email') {
    API.post('/resetpassword', {email: value})
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  } else {
    API.post(`/resetpassword?phone=${value}`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
};

export const logout = () => (dispatch: any) => {};
