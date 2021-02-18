import React, {ReactElement, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import Row from 'components/containers/Row';
import DefaultHeader from 'components/headers/DefaultHeader';
import Input from 'components/inputs/Input';
import ItemCategoryWithImage from 'components/listItems/ItemCategoryWithImage';
import ItemServiceInCategory from 'components/listItems/ItemServiceInCategory';
import ButtonIcon from 'components/buttons/ButtonIcon';

import styles from './styles';

import {selectServices} from 'store/client/services/selectors';
import {getServices} from 'store/client/services/actions';

interface IFlatListProps {
  item: any;
  index: number;
}

export default function Categories({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const servicesList = useSelector(selectServices);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    dispatch(getServices());
  }, []);

  useEffect(() => {
    const subServices = servicesList.find(
      (service) => service.id === selectedCategory,
    )?.subs;

    setSelectedServices(subServices);
  }, [selectedCategory, servicesList]);

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  const renderHeader = () => (
    <View>
      <DefaultHeader title={t('servicesCategories')} dontUseLeftIcon />
      <Row containerStyle={styles.searchBoxContainer}>
        <ButtonIcon
          iconName="filter-list"
          containerStyle={styles.searchIconContainerStyle}
          onPress={() => navigateTo('ServicesSearchFilters')}
        />
        <Input
          containerStyle={styles.searchInputContainerStyle}
          placeholder={t('typeYourRequest')}
        />
        <ButtonIcon
          iconName="search"
          containerStyle={styles.searchIconContainerStyle}
          onPress={() => navigateTo('ServicesSearchResult')}
        />
      </Row>
    </View>
  );

  const renderHeaderServices = () => (
    <View>
      <Text style={styles.headerTitleStyle}>{t('categoriesList')}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={servicesList}
        renderItem={({item}) => (
          <ItemCategoryWithImage
            onPress={() => setSelectedCategory(item.id)}
            title={item.title}
            imageSource={item.photo.url}
            selected={item.id === selectedCategory}
          />
        )}
        keyExtractor={(item, index) => item.title + index}
      />
    </View>
  );

  const renderServices = ({item, index}: IFlatListProps) => {
    const onPressService = () =>
      navigateTo('ServicesList', {
        categoryId: selectedCategory,
        subCategoryId: item.id,
      });

    if (!index) {
      return (
        <View>
          <Text style={styles.headerTitleStyle}>{t('servicesInCategory')}</Text>
          <ItemServiceInCategory
            onPress={onPressService}
            title={item.title}
            imageSource={item.photo.url}
            quantity={item.spec_count}
          />
        </View>
      );
    }
    return (
      <ItemServiceInCategory
        onPress={onPressService}
        title={item.title}
        imageSource={item.photo.url}
        quantity={item.spec_count}
      />
    );
  };

  return (
    <DefaultBgImageContainer>
      {renderHeader()}
      <Body containerStyle={styles.bodyContainerStyle}>
        <FlatList
          data={selectedServices}
          ListHeaderComponent={renderHeaderServices}
          renderItem={renderServices}
          contentContainerStyle={styles.listContentContainerStyle}
          keyExtractor={(item, index) => item.title + index}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
