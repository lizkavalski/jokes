import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {  useFonts,
  BalooTammudu2_400Regular,
  BalooTammudu2_500Medium,
  BalooTammudu2_600SemiBold,
  BalooTammudu2_700Bold,
  BalooTammudu2_800ExtraBold,} from '@expo-google-fonts/baloo-tammudu-2';
import styles from '../styles/styles';
import { StyleSheet } from 'react-native';

export default Header =()=> {
  let[fontsLoaded,error]=useFonts({
    BalooTammudu2_400Regular,
    BalooTammudu2_500Medium,
    BalooTammudu2_600SemiBold,
    BalooTammudu2_700Bold,
    BalooTammudu2_800ExtraBold,
  });
  const headStyle = StyleSheet.create({
    container:{
      alignSelf:'center',
      justifyContent:'center',
    },
    title:{
      fontFamily: 'BalooTammudu2_500Medium', 
      fontSize:45, 
      includeFontPadding:false,
      color:'#ffb347',
      textShadowColor: '#C6C6C6',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10

    },
    heading:{
      fontSize:15,
      alignSelf:'center',
      justifyContent:'center',
      position:'absolute',
      fontStyle: 'italic',
      top:75,
    },
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }else{  
    return (
    <>
    <View style={headStyle.container}>
      <Text style={headStyle.title}>Shake-in-Laugh</Text>
      <Text style={headStyle.heading}>*Shake your Device,or click the button for a joke*</Text>
    </View>
    </>

    )
}
}