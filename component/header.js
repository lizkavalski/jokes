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
    container:{ß
      alignSelf:'center',
      justifyContent:'center',
    },
    title:{
      fontFamily: 'BalooTammudu2_400Regular', 
      fontSize:45, 
      color:'#ffb347',
      textShadowColor:'black', 
      shadowOffset:{width:-1,height:2},
      textShadowRadius: 1, 
      borderWidth: 1.5,
      borderColor:'red',
    }
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }else{  
    return (
    <>
    <View style={headStyle.container}>
      <Text style={headStyle.title}>
        Shake-in-Laugh  
      </Text>
    </View>
    </>

    )
}
}