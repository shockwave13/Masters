import {IAction} from '../types';
import {IUserStore, SET_USER} from './types';

const initState = {
  user: null,
};

const userReducer = (state = initState, action: IAction): IUserStore => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
