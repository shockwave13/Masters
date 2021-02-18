import {SET_APP_LOADING_STATUS} from './types';

import {IAction} from '../types';

export const setLoading = (status: boolean): IAction => ({
  type: SET_APP_LOADING_STATUS,
  payload: status,
});
