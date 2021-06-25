import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor:'white',
  },
  text:{
    overflow:'hidden',
    backgroundColor: '#dcdcdc',
    fontSize:20,
    margin:25,
    padding:15,
    borderRadius: 15,
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