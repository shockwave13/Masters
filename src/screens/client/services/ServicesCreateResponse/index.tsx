import React, {ReactElement} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';

import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';

import RegularButton from 'components/buttons/RegularButton';
import InputMultiline from 'components/inputs/InputMultiline';
import globalStyles from 'constants/globalStyles';
import StarRating from 'react-native-star-rating';
import EStyleSheet from 'react-native-extended-stylesheet';
import ModalContainer from 'components/containers/ModalContainer';

export default function ServicesCreateResponse({
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('responseCreation')} />
      <ModalContainer>
        <Text style={globalStyles.H4Gray}>{t('rateImpressionOfService')}</Text>
        <StarRating
          maxStars={5}
          rating={3}
          starSize={30}
          fullStarColor={EStyleSheet.value('$primary')}
          emptyStarColor={EStyleSheet.value('$gray')}
          starStyle={styles.starStyle}
          containerStyle={styles.starRatingContainer}
        />
        <InputMultiline placeholder={t('enterYourResponse')} />
        <RegularButton
          title={t('send')}
          containerStyle={styles.buttonContainerStyle}
        />
      </ModalContainer>
    </DefaultBgImageContainer>
  );
}
