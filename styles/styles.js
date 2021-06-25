import {StyleSheet} from 'react-native';
// import { 
//   useFonts,
//   BalooTammudu2_400Regular,
//   BalooTammudu2_500Medium,
//   BalooTammudu2_600SemiBold,
//   BalooTammudu2_700Bold,
//   BalooTammudu2_800ExtraBold 
// } from '@expo-google-fonts/baloo-tammudu-2';

// let headingfont=()=>{
//   let[fontsLoaded,error]=useFonts({
//     BalooTammudu2_400Regular,
//   });
// }

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    borderWidth: 1.5,
    borderColor:'blue',
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor:'white',
  },
  heading:{
    fontSize:20,
    borderWidth: 1.5,
    borderColor:'blue',
  },
  text:{
    overflow:'hidden',
    backgroundColor: '#dcdcdc',
    fontSize:20,
    margin:25,
    padding:15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor:'blue',
  },
  linearGradient: {
    margin:50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'flex-end',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    padding:5,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default styles;