import React, {ReactElement, Suspense, useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

import Loader from 'components/Loader';

import themes from 'themes';

import {store, persistor} from 'store';

import 'i18n';
import ErrorBoundary from 'components/ErrorBoundary';
import AppNavigation from 'navigation/appNavigation';
import {navigationRef} from './RootNavigation';

export default function App(): ReactElement {
  useEffect(() => {
    EStyleSheet.build(themes.light);

    StatusBar.setBarStyle('light-content');
    Platform.OS === 'android' ? StatusBar.setTranslucent(true) : null;
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <NavigationContainer ref={navigationRef}>
              <AppNavigation />
            </NavigationContainer>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}
