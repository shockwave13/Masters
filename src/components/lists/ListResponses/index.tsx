import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';
import ItemResponse from 'components/listItems/ItemResponse';
import LinkButton from 'components/buttons/LinkButton';
import {useTranslation} from 'react-i18next';

interface IListResponses {
  data?: any;
  onPressFooterButton?: () => void;
  footerButton?: boolean;
}

interface IResponseItem {
  item?: object;
  index?: number;
}

const ListResponses = ({
  data,
  onPressFooterButton,
  footerButton,
}: IListResponses) => {
  const {t} = useTranslation();
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ItemResponse item={item} index={index} />
        )}
        ListFooterComponent={
          footerButton ? (
            <LinkButton
              containerStyle={styles.linkButtonContainerStyle}
              title={t('showFullResponseList')}
              onPress={onPressFooterButton}
            />
          ) : null
        }
      />
    </View>
  );
};

export default ListResponses;
