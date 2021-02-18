import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['error'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

import rootReducer from './rootReducer';

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store as any);

export {store, persistor};
