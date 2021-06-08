import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Button,} from 'react-native';
import {AppLoading} from "expo";
import { DeviceMotion} from 'expo-sensors';
//import {axios} from 'axios';
import styles from '../styles/styles';
// import { useFonts, BalooTammudu2_400Regular,} from '@expo-google-fonts/baloo-tammudu-2';

export default Random = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({jokes:'shake the device'});
  // site for the joke api to pull randon joke
  let url = "https://v2.jokeapi.dev/joke/Any?type=single";

  let fetchData=()=> { 
   return fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json.joke))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  };

  const handlePress=()=>{
    console.log('i got clicked')
      fetchData()
    }
  let acceleration={ x:5,y:5,z:5}
  DeviceMotion.addListener(({acceleration})=> {
    if(acceleration.x >.9 && acceleration.z >.5){
      fetchData()
      console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  })
      return (
        <View  style={styles.container}>
          {/* <Text style={{fontFamily:'BalooTammudu2_400Regular', fontSize:24, color:'#ffb347'}}> Shake-in-Laugh </Text> */}
          <Text>Shake your Device for a Joke</Text>
          {isLoading ? <ActivityIndicator style={styles.text}/> 
            :(
             <View>
              <Text style={styles.text}>{data}</Text>
              <Button title='Click here!' onPress={handlePress}/>
            </View>)}
      </View>
    );

};


