import {createSelector} from 'reselect';
import {IServicesStore} from './types';
import {IStore} from '../../types';

export const getServicesState = (state: IStore): IServicesStore =>
  state.services;

export const selectServices = createSelector(
  [getServicesState],
  (reducerState) => reducerState.services,
);

export const selectSpecialistServices = createSelector(
  [getServicesState],
  (reducerState) => reducerState.specialistsServices,
);
