import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Random from './component/randomMaker';

export default function App() {
  return (
    <View>
      <Random/>
    </View>
  );
}

