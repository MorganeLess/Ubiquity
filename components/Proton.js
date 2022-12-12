//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
const Proton = () => {
    var [isPress, setIsPress] = React.useState(false);
  
    const handleClick = () => {
      // 👇️ toggle
      setIsPress(current => !current);
  
      // 👇️ or set to true
      //setIsPress(true);
    }
    return (
        <View onPress={handleClick}>
          <Image style={styles.container} source={require("../img/smallproton.png")}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

      width:'100%',
      height: '85%',
      
        },


});

//make this component available to the app
export default Proton;
