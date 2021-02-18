import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';

import fonts from 'constants/fonts';
import {
  selectErrorMessage,
  selectErrorStack,
  selectErrorVisible,
} from 'store/error/selectors';
import {IStore} from 'store/types';
import {setErrorVisible} from 'store/error/actions';

const styles = EStyleSheet.create({
  errorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#B00020',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleStyle: {
    fontFamily: fonts.robotoMedium,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  messageStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: 12,
    color: 'white',
    marginTop: 10,
  },
});

const ErrorBoundary = ({children}: any) => {
  const error = useSelector((state: IStore) => selectErrorMessage(state));
  const stack = useSelector((state: IStore) => selectErrorStack(state));
  const isErrorVisible = useSelector((state: IStore) =>
    selectErrorVisible(state),
  );

  return (
    <View style={{flex: 1}}>
      {children}

      {isErrorVisible ? (
        <View style={styles.errorContainer}>
          <SafeAreaView>
            <View>
              <Text style={styles.titleStyle}>{error}</Text>
              <Text style={styles.messageStyle}>{JSON.stringify(stack)}</Text>
            </View>
          </SafeAreaView>
        </View>
      ) : null}
    </View>
  );
};

export default ErrorBoundary;
