import {createSelector} from 'reselect';
import {ICatalogStore} from './types';
import {IStore} from '../types';

export const getCatalogState = (state: IStore): ICatalogStore => state.catalogs;

export const selectCategories = createSelector(
  [getCatalogState],
  (reducerState) => reducerState.categories,
);

export const selectSpecialists = createSelector(
  [getCatalogState],
  (reducerState) => reducerState.specialists,
);

export const selectServices = createSelector(
  [getCatalogState],
  (reducerState) => reducerState.services,
);

export const selectService = createSelector(
  [getCatalogState],
  (reducerState) => reducerState.service,
);
