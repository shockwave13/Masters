import {StyleProp, ViewStyle} from 'react-native';

export interface IContainer {
  containerStyle?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
  children: any;
}
