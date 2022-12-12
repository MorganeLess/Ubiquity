import { View, Text, StyleSheet, Image, ScrollView, Animated } from "react-native";
import React from "react";
import GestureHandler, { PinchGestureHandler } from "react-native-gesture-handler";
//import {GestureHandler} from 'expo'
//const {PinchGestureHandler} = GestureHandler;

const Manueldutilisation = () => { 

const handlePinch = Animated.event([{ nativeEvent: {scale}}]);
const scale = React.useRef(new Animated.Value(0)).current;

  
    return(
      <View style = {styles.container}>
        <PinchGestureHandler>
        <ScrollView onGestureEvent = {handlePinch} >
            <Animated.Image source={require('../img/Manuel/1Manuel.png')} 
                style = {{width:700, height:700 ,resizeMode:'contain'}}/>
            <Animated.Image source={require('../img/Manuel/2Manuel.png')} 
                style = {{width:700, height:700 ,resizeMode:'contain'}}/>
            <Animated.Image source={require('../img/Manuel/3Manuel.png')} 
                style = {{width:700, height:700 ,resizeMode:'contain'}}/>
            <Animated.Image source={require('../img/Manuel/4Manuel.png')} 
                style = {{width:700, height:700 ,resizeMode:'contain'}}/>
            <Animated.Image source={require('../img/Manuel/5Manuel.png')} 
                style = {{width:700, height:700 ,resizeMode:'contain'}}/>
        </ScrollView>
        </PinchGestureHandler>
      </View>


            
    )

}

export default Manueldutilisation

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: '#ffffff',
      borderRadius: 50,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#AAAAAA'
      
    },
  });