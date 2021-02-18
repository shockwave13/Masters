import {SET_FAVORITES, IFavoriteStore} from './types';
import {IAction} from '../../types';

const initState = {
  favorites: [],
};

const catalogsReducer = (
  state = initState,
  action: IAction,
): IFavoriteStore => {
  switch (action.type) {
    case SET_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    default:
      return state;
  }
};

export default catalogsReducer;
