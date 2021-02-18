import React from 'react';

import ItemCalendarSchedule from 'components/listItems/ItemCalendarSchedule';

const ItemRecord = ({item, navigation}: any) => {
  const {user, img} = item.specialist;
  const {service} = item.specialist_time;

  const onPressService = () => {
    navigation.navigate('DetailRecord', {
      service: item,
    });
  };

  return (
    <ItemCalendarSchedule
      onPress={onPressService}
      title={service.description}
      dateTime={item.recorded}
      imageSource={img?.url}
      clientName={`${user.name} ${user.last_name}`}
    />
  );
};

export default ItemRecord;
