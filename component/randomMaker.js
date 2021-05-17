import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList,} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {axios} from 'axios';
import styles from '../styles/styles';
// import {When} from './when.js'
// import { WorldAlignmentTypes } from 'expo/build/AR';

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

  const _handlePress=()=>{
      fetchData()
    }
 useEffect(() => {
  let acceleration={ x:4,y:4,z:4}
  DeviceMotion.addListener(({acceleration})=> {
    if(acceleration.x >.8 && acceleration.z >.5){
      _handlePress()
      console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  })
},[])
      return (
        <View  style={styles.container}>
          <Text>Shake your Device for a Joke</Text>
          {isLoading ? <ActivityIndicator style={styles.text}/> : (<Text style={styles.text}>{data}</Text>)}
      </View>
    );

};


