import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/header'
import Random from './component/randomMaker';
import{style} from './styles/styles';

export default function App() {
  return (
    <>
      <Header/>
      <Random/>
    </>
  );
}

