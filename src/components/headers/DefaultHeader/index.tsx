import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

import {IHeader} from '../types';

import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const DefaultHeader = ({
  title,
  dontUseLeftIcon,
  crossLeftIcon,
  containerStyle,
  titleStyle,
  onPressIcon,
}: IHeader) => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        dontUseLeftIcon && {justifyContent: 'flex-end'},
      ]}>
      {!dontUseLeftIcon && (
        <Icon
          name={crossLeftIcon ? 'x' : 'arrow-left'}
          type="feather"
          size={EStyleSheet.value('$appFonts.$f35')}
          color={'#fff'}
          onPress={onPressIcon ?? onPressBack}
        />
      )}

      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </View>
  );
};

export default DefaultHeader;
