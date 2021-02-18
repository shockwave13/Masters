import {createSelector} from 'reselect';
import {IAuthStore} from './types';
import {IStore} from '../types';

export const getAuthState = (state: IStore): IAuthStore => state.auth;

export const selectToken = createSelector(
  [getAuthState],
  (authState) => authState.token,
);

export const selectRefreshToken = createSelector(
  [getAuthState],
  (authState) => authState.refreshToken,
);

export const selectIsAuth = createSelector(
  [getAuthState],
  (authState) => authState.isAuth,
);

export const selectIsMaster = createSelector(
  [getAuthState],
  (authState) => authState.isMaster,
);

export const selectSignUpData = createSelector(
  [getAuthState],
  (authState) => authState.createMasterState,
);
