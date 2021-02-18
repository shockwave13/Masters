import {combineReducers} from 'redux';

import appReducer from './app';
import authReducer from './auth';
import calendarReducer from './calendar/reducer';
import catalogsReducer from './catalogs';
import errorReducer from './error';
import userReducer from './user';
//CLIENT
import favoritesReducer from './client/favorites';
import servicesReducer from './client/services/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  error: errorReducer,
  user: userReducer,
  catalogs: catalogsReducer,
  calendar: calendarReducer,
  favorites: favoritesReducer,
  services: servicesReducer,
});

export default rootReducer;
