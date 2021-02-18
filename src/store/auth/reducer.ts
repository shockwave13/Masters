import {IAction} from '../types';
import {
  SET_TOKEN,
  SET_AUTH,
  IAuthStore,
  SET_VALUE,
  SET_IS_MASTER,
} from './types';

const initState = {
  isAuth: false,
  token: '',
  refreshToken: '',
  isMaster: 0,
  createMasterState: {
    address: '',
    at_home: 0,
    city: '',
    company_name: '',
    country: '',
    category_id: [],
    geo: {lat: 50.46906, lng: 30.47853},
    on_depature: 0,
    radius: 5000,
    region: '',
    show_full: 0,
    street: '',
    user_id: 0,
  },
};

const authReducer = (state = initState, action: IAction): IAuthStore => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case SET_IS_MASTER: {
      return {
        ...state,
        isMaster: action.payload,
      };
    }
    case SET_VALUE: {
      const {field, value} = action.payload;
      return {
        ...state,
        createMasterState: {
          ...state.createMasterState,
          [field]: value,
        },
      };
    }
    default:
      return state;
  }
};

export default authReducer;
