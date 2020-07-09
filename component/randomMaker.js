import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import{styles} from "../styles/styles.js"
import {When} from './when.js'
import { WorldAlignmentTypes } from 'expo/build/AR';

export default function Random(){  
   const [random,setRandom]=useState(' Just Shake your phone for a joke')

    // let listOfStr=['Yes','No','Try Again Later','Might Not Be A Good Idea', 'Go for it','Aright','Definitely go for it', 'That A Great Idea', 'You Might Want to Rethink Your Decisions'];
  // site for the joke api to pull randon joke
  let url = "https://official-joke-api.appspot.com/jokes/random";

  let componentDidMount(){
    fetch(url)
      .then(results => results.json())
      .then((resultsJson) => {
        this.SetState({
          'Question': results.setup,
          'Answer': results.punchline
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
  }



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
