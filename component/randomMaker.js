import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {When} from './when.js'
import { WorldAlignmentTypes } from 'expo/build/AR';

export default function Random(){  
   const [random,setRandom]=useState(' Just Shake your phone for a joke')

  // site for the joke api to pull randon joke
  let url = "https://v2.jokeapi.dev/joke/Any";

const fetchData = async () => { 
  const respone = await axios.get(url);
  setRandom(respone.data);

};




    //let randomMaker = listOfStr[Math.floor(Math.random()*listOfStr.length)];
  //console.log(randomMaker,'line 8')
   
  const _handlePress=()=>{
      setRandom(Random)
     // console.log('I got in!')
    }
 useEffect(()=>{
  let acceleration={ x:5,y:5,z:5}
  DeviceMotion.addListener(({acceleration})=> {
    if(acceleration.x >.8 && acceleration.z >.5){
      _handlePress()
     // console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  }
 )})
    return (
     <View style={styles.container}>
        {/* <When condition={true}>
          <Button title='Click on Me' onPress={_handlePress}/>
        </When> */}
        <Text style= {styles.text}>
         {this.state}
        </Text>
     </View>
    );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:12,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fbd4ff',
    padding:80,
  },
  text:{
    overflow:'hidden',
    fontSize:16,
    backgroundColor:'#F7F9F9',
    padding:20,
    margin:50,
    borderRadius:30,
  }
});