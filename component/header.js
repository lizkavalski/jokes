import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BalooTammudu2_400Regular,} from '@expo-google-fonts/baloo-tammudu-2';
import styles from '../styles/styles';

export default Header =()=> {
  let[fontsLoaded,error]=useFonts({
    BalooTammudu2_400Regular,
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }else{  
    return (
    <>
    <View style={styles.heading}>
      <Text style={{fontFamily: 'BalooTammudu2_400Regular', fontSize:40, color:'#ffb347',textShadowColor:'black', shadowOffset:{width:-1,height:0},textShadowRadius: 1}}>
        Shake-in-Laugh  
      </Text>
    </View>
    </>

    )
}
}