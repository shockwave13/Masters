import React from 'react';
import {View, ImageBackground} from 'react-native';
import images from 'constants/images';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  bgImageStyle: {
    flex: 1,
  },
});

const DefaultBgImageContainer = ({children}: any) => (
  <ImageBackground
    source={images.background}
    style={styles.bgImageStyle}
    resizeMode="stretch">
    <View style={styles.container}>{children}</View>
  </ImageBackground>
);

export default DefaultBgImageContainer;
