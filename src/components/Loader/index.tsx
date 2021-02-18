import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={'#54D3C2'} />
  </View>
);

export default Loader;
