import React, {ReactElement, useState} from 'react';
import {View, Text, FlatList, ScrollView, Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';

import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import {Icon} from 'react-native-elements';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import EStyleSheet from 'react-native-extended-stylesheet';

import Switcher from 'components/switchers/Switcher';
import RegularButton from 'components/buttons/RegularButton';
import LinkButton from 'components/buttons/LinkButton';
import ItemCheckBox from 'components/picker/ItemCheckBox';

const values = [];
const DATATWO = [
  {
    title: 'Main dishes',
    imageSource:
      'https://i.pinimg.com/400x300/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
    count: 12,
  },
  {
    title: 'Main dishes',
    imageSource:
      'https://i.pinimg.com/400x300/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
    selected: true,
    count: 12,
  },
  {
    title: 'Main dishes',
    imageSource:
      'https://i.pinimg.com/400x300/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
    count: 2,
  },
  {
    title: 'Main dishes',
    imageSource:
      'https://i.pinimg.com/400x300/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
    count: 2,
  },
];

export default function ServicesSearchFilters({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const [activeFilterId, setActiveFilterId] = useState(0);
  const [activeLocationTypeId, setActiveLocationTypeId] = useState(0);
  const workVariantList = [
    {
      id: 0,
      icon: {
        name: 'crosshairs-gps',
        type: 'material-community',
        color: 'white',
      },
      title: t('aroundMe'),
    },
    {
      id: 1,
      icon: {name: 'map', type: 'material-community', color: 'white'},
      title: t('selectAddress'),
    },
  ];

  const filtersList = [
    {
      id: 0,
      title: `${t('rating')} <`,
    },
    {
      id: 1,
      title: `${t('rating')} >`,
    },
    {
      id: 2,
      title: `${t('distance')} <`,
    },
    {
      id: 3,
      title: `${t('distance')} >`,
    },
    {
      id: 4,
      title: `${t('responses')} <`,
    },
    {
      id: 5,
      title: `${t('responses')} >`,
    },
    {
      id: 6,
      title: `${t('price')} <`,
    },
    {
      id: 7,
      title: `${t('price')} >`,
    },
    {
      id: 8,
      title: `${t('better')}`,
    },
  ];

  const onPressSwitch = (id: number) => {
    id === 1 && navigation.navigate('ServicesLocationFilter');
    setActiveLocationTypeId(id);
  };

  const CustomSliderMarkerLeft = ({currentValue}: number) => {
    return (
      <View style={styles.markersContainerStyle}>
        <Text style={[globalStyles.H4Black, styles.markersValueStyle]}>
          {currentValue}
        </Text>
        <Icon
          size={20}
          color={EStyleSheet.value('$white')}
          containerStyle={styles.markersIconsContainerStyle}
          name="chevron-left"
        />
      </View>
    );
  };
  const CustomSliderMarkerRight = ({currentValue}: number) => {
    return (
      <View style={styles.markersContainerStyle}>
        <Text style={[globalStyles.H4Black, styles.markersValueStyle]}>
          {currentValue}
        </Text>
        <Icon
          size={20}
          color={EStyleSheet.value('$white')}
          containerStyle={styles.markersIconsContainerStyle}
          name="chevron-right"
        />
      </View>
    );
  };

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('searchFilter')} />

      <Body containerStyle={styles.bodyContainerStyle}>
        <ScrollView>
          <Text
            style={[
              globalStyles.H4Gray,
              styles.paddingHorizontal,
              styles.marginVertical,
            ]}>
            {t('priceRange')}
          </Text>
          <MultiSlider
            sliderLength={
              Dimensions.get('screen').width -
              EStyleSheet.value('$appHeight.$h75')
            }
            values={[0, 1000]}
            trackStyle={styles.sliderTrackStyle}
            selectedStyle={styles.sliderSelectedStyle}
            containerStyle={styles.sliderContainerStyle}
            isMarkersSeparated={true}
            customMarkerLeft={(e) => (
              <CustomSliderMarkerLeft currentValue={e.currentValue} />
            )}
            customMarkerRight={(e) => (
              <CustomSliderMarkerRight currentValue={e.currentValue} />
            )}
            min={0}
            max={1000}
          />
          <Text style={[globalStyles.H4Gray, styles.paddingHorizontal]}>
            {t('location')}
          </Text>
          <View style={styles.switchButtonsContainerStyle}>
            <Switcher
              selectedItem={activeLocationTypeId}
              items={workVariantList}
              onPress={(id: number) => onPressSwitch(id)}
            />
          </View>

          <Text style={[globalStyles.H4Gray, styles.paddingHorizontal]}>
            {t('sortBy')}
          </Text>
          <View>
            <FlatList
              contentContainerStyle={styles.filtersListContentContainerStyle}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={filtersList}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={({item, index}) => {
                return (
                  <ItemCheckBox
                    id={index}
                    title={item.title}
                    isActive={activeFilterId === index ? true : false}
                    containerStyle={{flex: 1, paddingHorizontal: 7}}
                    itemContainerStyle={styles.filterItemContainerStyle}
                    onPress={() => setActiveFilterId(index)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.paddingHorizontal}>
            <LinkButton
              containerStyle={{alignItems: 'center'}}
              title={t('resetFilters')}
            />
            <RegularButton
              containerStyle={styles.marginVertical}
              title={t('applyFilters')}
              onPress={() => navigateTo('ServicesMastersFilteredList')}
            />
          </View>
        </ScrollView>
      </Body>
    </DefaultBgImageContainer>
  );
}
