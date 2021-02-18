import fonts from 'constants/fonts';
import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface ILabelProps {
  title: string;
}

const styles = EStyleSheet.create({
  containerStyle: {
    marginVertical: '$appHeight.$h20',
  },
  labelStyle: {
    fontFamily: fonts.robotoReguluar,
    fontWeight: '400',
    color: '$gray',
    fontSize: '$appFonts.$f18',
  },
});

const Label = ({title}: ILabelProps) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{title}</Text>
  </View>
);

export default Label;
