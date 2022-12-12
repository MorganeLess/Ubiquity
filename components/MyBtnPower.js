import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button, Image } from "react-native";

const BtnPower = () => {
  var [isPress, setIsPress] = React.useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsPress(current => !current);

    // 👇️ or set to true
    //setIsPress(true);
  };
  
    return (
        <TouchableOpacity styles={styles.container} onPress={handleClick}>
          <Image source={require("../img/power2.png")} style={isPress ? styles.btnPress : styles.btnNormal}/>
        </TouchableOpacity>
        )
        }
        export default BtnPower

        const styles = StyleSheet.create({
            container: {
              
              
              
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