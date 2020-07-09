import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {When} from './when.js'
import { WorldAlignmentTypes } from 'expo/build/AR';

export default function RandomStr(){  
   const [random,setRandom]=useState(' Just Shake your phone for a joke')

    // let listOfStr=['Yes','No','Try Again Later','Might Not Be A Good Idea', 'Go for it','Aright','Definitely go for it', 'That A Great Idea', 'You Might Want to Rethink Your Decisions'];
  // site for the joke api to pull randon joke
    let randomMaker = listOfStr[Math.floor(Math.random()*listOfStr.length)];
  //console.log(randomMaker,'line 8')
   
  const _handlePress=()=>{
      setRandom(randomMaker)
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
         {random}
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
    backgroundColor:'#1E1F27',
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