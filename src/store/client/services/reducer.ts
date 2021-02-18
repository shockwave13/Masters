import {IAction} from 'store/types';
import {SET_SERVICES, SET_SPECIALIST_SERVICES} from './types';

const initState = {
  services: [],
  specialistsServices: [],
};

const servicesReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case SET_SERVICES: {
      return {
        ...state,
        services: action.payload,
      };
    }
    case SET_SPECIALIST_SERVICES: {
      return {
        ...state,
        specialistsServices: action.payload,
      };
    }
    default:
      return state;
  }
};

export default servicesReducer;
