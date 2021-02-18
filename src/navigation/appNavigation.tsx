import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AuthStack from './authNavigation';
import BottomTabsMaster from './bottomTabsNavigationMaster';
import BottomTabsClient from './clietNavigations/bottomTabsNavigationClient';

import {selectIsAuth, selectToken, selectIsMaster} from 'store/auth/selectors';
import {getProfile} from 'store/user';
import {setApiToken} from 'api';

export default function AppNavigation() {
  const isAuth = useSelector(selectIsAuth);
  const isMaster = useSelector(selectIsMaster);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      setApiToken(token);
      dispatch(getProfile());
    }
  }, [isAuth]);

  return !isAuth ? (
    // return isAuth ? (
    isMaster ? (
      <BottomTabsMaster />
    ) : (
      <BottomTabsClient />
    )
  ) : (
    <AuthStack />
  );
}
