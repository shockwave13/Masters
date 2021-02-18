import React, {useCallback, useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';

import ButtonIcon from 'components/buttons/ButtonIcon';
import Row from 'components/containers/Row';

import styles from './styles';

import images from 'constants/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IFavoriteMaster {
  imagesList: any[];
  masterName: string;
  serviceName: string;
  distance: number;
  rating: number;
  onPress: () => void;
}

const FavoriteMaster = ({
  imagesList,
  masterName,
  serviceName,
  distance,
  rating,
  onPress,
}: IFavoriteMaster) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const primaryColor = EStyleSheet.value('$primary');

  const renderImages = ({item}: any) => (
    <View style={{flex: 1}}>
      <Image
        source={{uri: item.url}}
        resizeMode="stretch"
        style={styles.imageStyle}
      />
    </View>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={imagesList.length}
      activeDotIndex={activeImageIndex}
      containerStyle={styles.paginationContainerStyle}
      dotStyle={styles.activeDotStyle}
      inactiveDotStyle={styles.inactiveDotStyle}
    />
  );

  const screenWidth = Dimensions.get('window').width;

  const getSliderWidth = useCallback(() => {
    return screenWidth - EStyleSheet.value('$appWidth.$w25');
  }, [screenWidth]);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.imagesContainerStyle}>
        <Carousel
          horizontal
          pagingEnabled
          data={imagesList}
          renderItem={renderImages}
          sliderWidth={getSliderWidth()}
          itemWidth={getSliderWidth()}
          onSnapToItem={(index: number) => setActiveImageIndex(index)}
          ListEmptyComponent={() => (
            <View
              style={[styles.emptyImageContainer, {width: getSliderWidth()}]}>
              <Image
                source={images.placeholderImage}
                resizeMode="stretch"
                style={styles.emptyImageStyle}
              />
            </View>
          )}
        />
        {renderPagination()}
      </View>
      <TouchableOpacity onPress={onPress} style={styles.footerContainerStyle}>
        <Row containerStyle={styles.rowContainer}>
          <Text style={styles.masternameStyle}>{masterName}</Text>
          <Row>
            <Text>{distance} км </Text>
            <ButtonIcon
              iconSize={35}
              iconName="not-listed-location"
              iconColor={primaryColor}
            />
          </Row>
        </Row>
        {serviceName && (
          <Text numberOfLines={3} style={styles.descriptionStyle}>
            {serviceName}
          </Text>
        )}
        <Row containerStyle={styles.rowContainer}>
          <StarRating
            maxStars={5}
            rating={rating}
            starSize={30}
            fullStarColor={primaryColor}
            emptyStarColor={primaryColor}
            starStyle={styles.starStyle}
            containerStyle={styles.starRatingContainer}
          />
          <ButtonIcon
            iconName="heart"
            iconType="feather"
            iconColor="white"
            iconSize={20}
            containerStyle={styles.heartIconContainer}
          />
        </Row>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteMaster;
