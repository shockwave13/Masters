import {IAppStore, SET_APP_LOADING_STATUS} from './types';
import {IAction} from '../types';

const initState = {
  loading: false,
};

const appReducer = (state = initState, action: IAction): IAppStore => {
  switch (action.type) {
    case SET_APP_LOADING_STATUS: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
