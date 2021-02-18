import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IRowProps {
  containerStyle?: StyleProp<ViewStyle>;
  children: any;
}

const Row = ({containerStyle, children}: IRowProps) => (
  <View style={[styles.containerStyle, containerStyle]}>{children}</View>
);

const styles = EStyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Row;
