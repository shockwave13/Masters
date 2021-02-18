import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, View, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import Body from 'components/containers/Body';
import RegularButton from 'components/buttons/RegularButton';
import globalStyles from 'constants/globalStyles';
import {SwitcherItem} from 'components/switchers/Switcher';
import ItemCheckBox from 'components/picker/ItemCheckBox';
import CombineButton from 'components/buttons/CombineButton';

import {selectSignUpData} from 'store/auth/selectors';
import {createSpecialist, setSignUpValue} from 'store/auth';

import styles from './styles';

export default function WorkAddress({navigation}: any) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const createMasterState = useSelector(selectSignUpData);
  const {at_home, on_depature, radius} = createMasterState;

  const radiusList = [5, 10, 20, 30, 40, 50];

  const onSubmit = () => {
    dispatch(createSpecialist());
  };

  const onPressMap = () => {
    navigation.navigate('WorkAddress4');
  };

  const setData = (field: string, value: any) => {
    dispatch(setSignUpValue(field, value));
  };

  const renderItemRadius = ({item, index}: any) => {
    const isActive = item === radius / 1000;

    return (
      <ItemCheckBox
        id={index}
        title={`${item} км`}
        isActive={isActive}
        containerStyle={{flex: 1, paddingHorizontal: 5}}
        itemContainerStyle={styles.itemContainerStyle}
        onPress={() => setData('radius', item * 1000)}
      />
    );
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('workAddress')} />

      <Body>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Text style={globalStyles.H4Gray}>{t('selectVariant')}</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <SwitcherItem
                icon={{
                  name: 'crosshairs-gps',
                  type: 'material-community',
                  color: 'white',
                }}
                title={t('atHome')}
                isActive={at_home === 1}
                onPress={() => setData('at_home', at_home === 1 ? 0 : 1)}
              />

              <SwitcherItem
                icon={{name: 'map', type: 'material-community', color: 'white'}}
                title={t('remote')}
                isActive={on_depature === 1}
                onPress={() =>
                  setData('on_depature', on_depature === 1 ? 0 : 1)
                }
              />
            </View>

            <Text style={globalStyles.H4Gray}>{t('selectRadius')}</Text>
            <View>
              <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={radiusList}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={renderItemRadius}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <CombineButton
              title={t('selectOnMap')}
              rightIcon={{name: 'arrow-right', type: 'material-community'}}
              onPress={onPressMap}
            />
          </View>
          <RegularButton title={t('next')} onPress={onSubmit} />
        </SafeAreaView>
      </Body>
    </DefaultBgImageContainer>
  );
}
