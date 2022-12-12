import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const GuideDeDemarrage = () => { 
    return(
      <View style = {styles.container}>

            <Image source={require('../img/GuideDeDemarrage.png')} 
                style = {{width:400, height:700 ,resizeMode:'contain'}}/>

      </View>


            
    )

}

export default GuideDeDemarrage

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