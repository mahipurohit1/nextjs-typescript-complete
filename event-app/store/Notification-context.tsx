import { createContext, ReactNode, useEffect, useState } from "react";
interface notificationDataType {
  title: string;
  message: string;
  status: string;
}

type notificationContextType = {
  notification: null | notificationDataType;
  showNotification: (notificationData: notificationDataType) => void;
  hideNotification: () => void;
};

export const NotificationContext = createContext<notificationContextType>(
  null!
);

interface propsData {
  children: ReactNode;
}

export const NotificationContextProvider: React.FC<propsData> = (props) => {
  const [activeNotification, setActiveNotification] =
    useState<notificationDataType | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeNotification) {
      timer = setTimeout(() => {
        hideNotification();
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  const showNotification = (notificationData: notificationDataType) => {
    setActiveNotification(notificationData);
  };

  const hideNotification = () => {
    setActiveNotification(null);
  };
  const contextValue = {
    notification: activeNotification,
    showNotification: showNotification,
    hideNotification: hideNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {props.children}
    </NotificationContext.Provider>
  );
};
