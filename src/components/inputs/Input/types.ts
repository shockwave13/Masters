import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface IInput extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle | ViewStyle>;
  typeField?: 'secure' | 'default';
  rightText?: string;
}
