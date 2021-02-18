import React, {ReactElement} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IContainer} from '../types';

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '$appHeight.$h15',
  },
  bodyStyle: {
    borderRadius: 25,
    padding: '$appHeight.$h25',
    backgroundColor: '$background',
  },
});

export default function ModalContainer(props: IContainer): ReactElement {
  const {containerStyle, bodyStyle, children} = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View style={[styles.bodyStyle, bodyStyle]}>{children}</View>
    </View>
  );
}
