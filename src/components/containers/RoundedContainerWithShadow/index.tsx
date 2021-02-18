import React, {ReactElement} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {IContainer} from '../types';

const styles = EStyleSheet.create({
  containerStyle: {
    borderRadius: '$appHeight.$h25',
    padding: '$appHeight.$h15',
    flex: 1,
    backgroundColor: '$white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default function RoundedContainerWithShadow(
  props: IContainer,
): ReactElement {
  const {containerStyle, children} = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>{children}</View>
  );
}
