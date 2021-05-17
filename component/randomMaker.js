import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList,} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {axios} from 'axios';
import{style} from '../styles/styles';
// import {When} from './when.js'
// import { WorldAlignmentTypes } from 'expo/build/AR';

export default class Random extends App{  
  constructor(props){
    super(props);
    this.state= {
      data:[{joke:' Just Shake your phone for a joke'}],
      isLoading:true
    }
  }
  // const [isLoading, setLoading]=useState(true);
  // const [random,setRandom]= useState([{title:' Just Shake your phone for a joke'}])
  // site for the joke api to pull randon joke
  // let url = "https://v2.jokeapi.dev/joke/Any?type=single";

  fetchData() { 
   return fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then ((respone)=> respone.json)
    .then((json)=>this.setState({data:json.joke}))
    .catch((error) => console.error(error))
      .finally(() => {this.setState({isLoading:false});
    })
  };
    
  // const _handlePress=()=>{
  //     fetchData()
  //     console.log('I got in!')
  //   }
 useEffect(){
  let acceleration={ x:5,y:5,z:5}
  DeviceMotion.addListener(({acceleration})=> {
    if(acceleration.x >.8 && acceleration.z >.5){
      fetchData()
      console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  }
 )};
  render(){
    const{data, isLoading}=this.state;
      return (
        <View>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.joke}</Text>
              )}
            />
          )}
      </View>
    );
  } 
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


