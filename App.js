/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginScreen from './src/Component/login';

const App = () => {
  return (
    <>
    <LoginScreen></LoginScreen>
    </>
  );
};

// const styles = StyleSheet.create({
  
// });

export default App;
