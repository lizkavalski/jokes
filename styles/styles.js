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
    flex: 1,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  heading:{
    flex: .10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:5,
  },
  text:{
    overflow:'hidden',
    backgroundColor: '#dcdcdc',
    fontSize:16,
    margin:25,
    padding:15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor:'blue',
  },
});

export default styles;