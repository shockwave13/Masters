import {ReactElement} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconProps} from 'react-native-elements';

export interface IButton {
  title: string;
  icon?: IconProps;
  onPress?: () => void;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface ISmallButton extends IButton {
  icon?: ReactElement;
}

export interface ILinkButton extends IButton {
  titleBold?: boolean;
}

export interface IRegularButton extends IButton {
  whiteButton?: boolean;
  disabled?: boolean;
}

export interface IButtonWithIcons extends IButton {
  leftIcon?: IconProps;
  coloredButton?: boolean;
  smallButton?: boolean;
}

export interface ISwitchButton extends IButton {
  switched?: boolean;
  content?: any;
}

export interface IButtonAction extends IButton {}
