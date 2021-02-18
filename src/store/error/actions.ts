import {IError, SET_MESSAGE, SET_VISIBLE} from './types';

export const writeError = (data: IError) => ({
  type: SET_MESSAGE,
  payload: data,
});

export const setErrorVisible = () => ({
  type: SET_VISIBLE,
});

export const setError = (data: IError) => (dispatch: any) => {
  dispatch(writeError(data));
  dispatch(setErrorVisible());

  setTimeout(() => {
    dispatch(setErrorVisible());
  }, 3000);
};
