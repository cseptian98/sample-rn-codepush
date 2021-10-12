/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from 'navigator/MainTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default codePush(codePushOptions)(App);
