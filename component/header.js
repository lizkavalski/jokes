import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BalooTammudu2_400Regular,} from '@expo-google-fonts/baloo-tammudu-2';
import styles from '../styles/styles';
import { StyleSheet } from 'react-native';

export default Header =()=> {
  let[fontsLoaded,error]=useFonts({
    BalooTammudu2_400Regular,
  });
  const headStyle = StyleSheet.create({
    container:{
      alignSelf:'center',
      justifyContent:'center',
    },
    title:{
      fontFamily: 'BalooTammudu2_400Regular', 
      fontSize:45, 
      includeFontPadding:false,
      color:'#ffb347',

    },
    heading:{
      fontSize:15,
      alignSelf:'center',
      justifyContent:'center',
      position:'absolute',
      top:65,
    },
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }else{  
    return (
    <>
    <View style={headStyle.container}>
      <Text style={headStyle.title}>Shake-in-Laugh</Text>
      <Text style={headStyle.heading}>Shake your Device for a Joke</Text>
    </View>
    </>

    )
}
}