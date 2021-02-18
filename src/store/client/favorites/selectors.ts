import {createSelector} from 'reselect';
import {IFavoriteStore} from './types';
import {IStore} from '../../types';

export const getFavoriteState = (state: IStore): IFavoriteStore =>
  state.favorites;

export const selectFavorites = createSelector(
  [getFavoriteState],
  (reducerState) => reducerState.favorites,
);
