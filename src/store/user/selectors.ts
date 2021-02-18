import {createSelector} from 'reselect';
import {IUserStore, IUser} from './types';
import {IStore} from '../types';

export const getUserState = (state: IStore): IUserStore => state.user;

export const selectUser = createSelector(
  [getUserState],
  (userState): IUser => userState.user,
);
