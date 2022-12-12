import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button, Image } from "react-native";

const BtnLed = () => {
  var [isPress, setIsPress] = React.useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsPress(current => !current);

    // 👇️ or set to true
    //setIsPress(true);
  };

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
          <Image source={require("../img/led.png")} style={isPress ? styles.btnPress : styles.btnNormal}/>
        </TouchableOpacity>
        )
        }
        export default BtnLed

        const styles = StyleSheet.create({
            container: {
              borderRadius:100,
              paddingHorizontal: '5%'
            },
            btnPress: {
              maxHeight: 75,
              maxWidth : 75,
              borderRadius: 100,
              backgroundColor:"#F3EBEB",
            },
            btnNormal: {
              maxHeight: 75,
              maxWidth : 75,
              borderRadius: 100,
              backgroundColor:"#AAAAAA",
            },
          });