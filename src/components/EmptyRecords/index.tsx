import fonts from 'constants/fonts';
import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IEmptyRecordsProps {
  title: string;
  description?: string;
  hint?: string;
}
const EmptyRecords = ({
  title = 'Извините, но пока у вас нет записей',
  description,
  hint,
}: IEmptyRecordsProps) => (
  <View style={styles.containerStyle}>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text style={styles.descriptionStyle}>{description}</Text>
    <Text style={styles.hintStyle}>{hint}</Text>
  </View>
);

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: fonts.robotoBold,
    fontSize: '$appFonts.$f15',
  },
  descriptionStyle: {},
  hintStyle: {},
});

export default EmptyRecords;
