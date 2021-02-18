import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import MapView, {PROVIDER_GOOGLE, Circle, Marker} from 'react-native-maps';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import Body from 'components/containers/Body';

import {selectSignUpData} from 'store/auth/selectors';
import {IStore} from 'store/types';
import {setSignUpValue} from 'store/auth';

import images from 'constants/images';

import styles from './styles';

export default function WorkAddress() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const createMasterState = useSelector((state: IStore) =>
    selectSignUpData(state),
  );
  const {radius} = createMasterState;

  const setData = (coordinate: {latitude: number; longitude: number}) => {
    dispatch(
      setSignUpValue('geo', {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
      }),
    );
  };

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    //radius: 2000,
  });

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('workRadius')} />

      <Body containerStyle={styles.mapContainerStyle}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={({nativeEvent}) => {
            const {coordinate} = nativeEvent;
            setData(coordinate);
            setRegion({...region, ...coordinate});
          }}>
          <Circle
            center={region}
            radius={radius}
            //fillColor="rgba(0,0,0,.3)"
            strokeWidth={3}
            strokeColor={EStyleSheet.value('$primary')}
          />
          <Marker
            coordinate={region}
            anchor={{x: 0.5, y: 0.5}}
            image={images.marker}
          />
        </MapView>
      </Body>
    </DefaultBgImageContainer>
  );
}
