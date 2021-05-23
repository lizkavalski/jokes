import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Button,} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {axios} from 'axios';
import styles from '../styles/styles';

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


