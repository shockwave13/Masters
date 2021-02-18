import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IHeader {
  title: string;
  dontUseLeftIcon?: boolean;
  crossLeftIcon?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPressIcon?: () => void;
}
