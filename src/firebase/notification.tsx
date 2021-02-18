import React, {createContext} from 'react';

const FNotification = createContext({});

export default function FNotificationСontext({children}: any) {
  return (
    <FNotification.Provider value={null}>{children}</FNotification.Provider>
  );
}
