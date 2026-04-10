import RNBootSplash from "react-native-bootsplash";
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationRouter } from './src/routers/navigation-router';

export const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return <NavigationRouter />;
};
