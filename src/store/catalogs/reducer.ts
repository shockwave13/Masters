import {ICatalogStore, SET_CATALOG} from './types';
import {IAction} from '../types';

const initState = {
  categories: [],
  specialists: [],
  services: [],
  service: {},
};

const catalogsReducer = (state = initState, action: IAction): ICatalogStore => {
  switch (action.type) {
    case SET_CATALOG: {
      const {field, value} = action.payload;
      return {
        ...state,
        [field]: value,
      };
    }
    default:
      return state;
  }
};

export default catalogsReducer;
