import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useTranslation} from 'react-i18next';
import styles from './styles';
import globalStyles from 'constants/globalStyles';

import ButtonRoundIcon from 'components/buttons/ButtonRoundIcon';

interface IItemEntry {
  onPressItem?: () => void;
  onPressButton?: () => void;
  durationPreparation?: number;
  durationFirst: number;
  durationSecond?: number;
  priceFirst: number;
  priceSecond?: number;
  title?: string;
  address?: string;
  useButtons?: boolean;
  isClientSide?: boolean;
}

const ItemEntry = ({
  onPressItem,
  durationPreparation,
  durationFirst,
  durationSecond,
  priceFirst,
  priceSecond,
  title,
  address,
  useButtons,
  isClientSide,
}: IItemEntry) => {
  const {t} = useTranslation();

  const renderButtons = () => {
    return (
      <View style={styles.iconsContainer}>
        {isClientSide ? (
          <ButtonRoundIcon
            iconName="alarm"
            title={t('appointment')}
            align="right"
          />
        ) : (
          <View style={styles.buttonsContainerStyle}>
            <ButtonRoundIcon
              iconName="check"
              iconType="material-community"
              align="right"
            />
            <ButtonRoundIcon iconName="x" iconType="feather" align="right" />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={onPressItem} style={styles.itemContainerStyle}>
        {title && <Text style={globalStyles.H4Black}>{title}</Text>}
        <View style={styles.textContainer}>
          <Text style={globalStyles.H4Gray}>
            {durationFirst} {t('minute')}
          </Text>
          <Text style={globalStyles.H4Gray}>
            {priceFirst} {t('grn')}
          </Text>
        </View>
        {priceSecond && (
          <View style={styles.textContainer}>
            <Text style={globalStyles.H4Gray}>
              {durationSecond} {t('hour')}
            </Text>
            <Text style={globalStyles.H4Gray}>
              {priceSecond} {t('grn')}
            </Text>
          </View>
        )}
        {durationPreparation && (
          <View style={styles.textContainer}>
            <Text style={globalStyles.H4Gray}>
              {durationPreparation} {t('minute')}
            </Text>
            <Text style={globalStyles.H4Gray}>{t('preparation')}</Text>
          </View>
        )}
        {address && (
          <View style={styles.textContainer}>
            <Text style={globalStyles.H4Black}>{address}</Text>
          </View>
        )}
      </TouchableOpacity>
      {useButtons && renderButtons()}
    </View>
  );
};

export default ItemEntry;
