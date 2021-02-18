import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface ImageView {
  uri: string;
}

const ImageView = ({uri}: ImageView) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: uri}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 2.5,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default React.memo(ImageView);
