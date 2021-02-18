import React, {ReactElement} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import DeviceInfo from 'react-native-device-info';

import {IContainer} from '../types';

const styles = EStyleSheet.create({
  containerStyle: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //overflow: 'hidden',
    paddingHorizontal: '$appHeight.$h25',
    paddingTop: '$appHeight.$h15',
    flex: 1,
    backgroundColor: '$background',

    // paddingBottom: DeviceInfo.hasNotch() ? 40 : 20,
  },
});

export default function BodyContainer(props: IContainer): ReactElement {
  const {containerStyle, children} = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>{children}</View>
  );
}
