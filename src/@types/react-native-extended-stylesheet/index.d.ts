declare module 'react-native-extended-stylesheet' {
  import {
    ViewStyle as RNViewStyle,
    TextStyle as RNTextStyle,
    StyleSheet,
    ImageStyle as RNImageStyle,
  } from 'react-native';
  import NamedStyles = StyleSheet.NamedStyles;

  type ExtraStyles<T> = {
    '@media android'?: ExtendedStyle<T>;
    '@media ios'?: ExtendedStyle<T>;
  };

  type ElementStyle<T> = ExtendedStyle<T> & ExtraStyles<T>;

  export type ExtendedStyle<T> = {
    [Q in keyof T]: any;
  };

  export type ViewStyle = ExtendedStyle<RNViewStyle>;
  export type TextStyle = ExtendStyle<RNTextStyle>;
  export type ImageStyle = ExtendStyle<RNImageStyle>;

  function value(expr: any, prop?: string): any;

  type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextSTyle | ImageStyle};

  function create<T extends NamedStyles<T> | NamedStyles<any>>(
    styles: T | NamedStyles<T> | {[P in keyof T]: ElementStyle<T[P]>},
  ): {[P in keyof T]: RegisteredStyle<T[P]>};

  function build(rawGlobalVars: any): void;
}

type RegisteredStyle<T> = number & {__registeredStyleBrand: T};
