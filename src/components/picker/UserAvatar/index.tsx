import React from 'react';
import {View, Image, Pressable, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ImagePicker from 'react-native-image-crop-picker';

import ButtonIcon from 'components/buttons/ButtonIcon';

import styles from './styles';
import images from 'constants/images';

export interface IServerImageProps {
  name: string;
  type: string;
  uri: string;
}
interface IUserAvatar {
  onPress?: (image: IServerImageProps) => void;
  source?: string;
  editable?: boolean;
  smallAvatar?: boolean;
}

const UserAvatar = ({onPress, source, editable, smallAvatar}: IUserAvatar) => {
  const onChangeUserAvatar = () => {
    ImagePicker.openPicker({
      cropping: false,
    }).then((image) => {
      const {filename, mime, sourceURL, path} = image;

      const imageObject = {
        name: filename,
        type: mime,
        uri: Platform.OS === 'ios' ? sourceURL : path,
      };

      onPress(imageObject);
    });
  };
  return (
    <View style={styles.container}>
      <Pressable
        disabled={!editable}
        style={[
          styles.containerStyle,
          smallAvatar && styles.smallAvatarContainerStyle,
        ]}
        onPress={onChangeUserAvatar}>
        <Image
          source={source ? {uri: source} : images.placeholderImage}
          resizeMode="stretch"
          style={{flex: 1, width: null, height: null}}
        />
      </Pressable>
      {editable && (
        <ButtonIcon
          containerStyle={styles.editIconContainerStyle}
          iconName="pencil"
          iconType="material-community"
          iconColor="#fff"
          iconSize={EStyleSheet.value('$appFonts.$f20')}
        />
      )}
    </View>
  );
};

export default UserAvatar;
