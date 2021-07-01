import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Button,} from 'react-native';
import {AppLoading} from "expo";
import { DeviceMotion} from 'expo-sensors';
import {axios} from 'axios';
import styles from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';



export default Random = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({jokes:'shake the device'});
  // site for the joke api to pull randon joke
  const JOKE_API= process.env.JokeAPI
  let url = 'https://v2.jokeapi.dev/joke/Any?type=single';

  let fetchData= ()=> { 
    fetch(url)
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
    if(acceleration.x > .9 && acceleration.z >.9){
      fetchData()
      console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  })
      return (
        <>
        <View style={styles.container}>
          {isLoading ? <ActivityIndicator style={styles.text}/> 
            :(
             <View>
              <Text style={styles.text}>{data}</Text>
            </View>
            )}
              <LinearGradient 
              colors={[ '#AED6F1','#5DADE2','#1F618D']} 
              start={[0.0, 0.0]}
              end={[1.0, 1.0]}
              style={styles.linearGradient}>
              <Text style={styles.buttonText} onPress={handlePress}> Click me!</Text>
              </LinearGradient>
        </View>
        </>
    );

};


