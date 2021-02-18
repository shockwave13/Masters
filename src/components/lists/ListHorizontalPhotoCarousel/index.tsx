import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ItemImagePicker from 'components/listItems/ItemImagePicker';

import styles from './styles';

interface IListHorizontalPhotoCarousel {
  data?: any;
  editable?: boolean;
}

const ListHorizontalPhotoCarousel = ({
  data,
  editable,
}: IListHorizontalPhotoCarousel) => {
  const screenWidth = Dimensions.get('screen').width;
  const [activeSlide, setActiveSlide] = useState(0);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{paddingVertical: 10}}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={styles.containerStyle}>
      <Carousel
        data={data}
        renderItem={({item, index}: any) => (
          <ItemImagePicker source={item.uri} editable={editable} />
        )}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={screenWidth * 0.81}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination()}
    </View>
  );
};

export default ListHorizontalPhotoCarousel;
