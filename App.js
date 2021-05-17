import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Random from './component/randomMaker';
import{style} from './styles/styles';

export default class App extends React.Component {
  render() {
    return <Random/>;
  }
}

