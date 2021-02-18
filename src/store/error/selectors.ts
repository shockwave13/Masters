import {IErrorStore} from './types';
import {IStore} from 'store/types';
import {createSelector} from 'reselect';

export const getErrorState = (state: IStore): IErrorStore => state.error;

export const selectErrorMessage = createSelector(
  [getErrorState],
  (reducerState) => reducerState.error.message,
);

export const selectErrorStack = createSelector(
  [getErrorState],
  (reducerState) => reducerState.error.errors,
);

export const selectErrorVisible = createSelector(
  [getErrorState],
  (reducerState) => reducerState.isErrorVisible,
);
