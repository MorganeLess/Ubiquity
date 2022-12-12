import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button, Image } from "react-native";

const BtnPairing = () => {

  var [isPress, setIsPress] = React.useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsPress(current => !current);

    // 👇️ or set to true
    //setIsPress(true);
  };

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
          <Image source={require("../img/p.png")} style={isPress ? styles.btnPress : styles.btnNormal}/>
        </TouchableOpacity>
        )
        }
        export default BtnPairing

        const styles = StyleSheet.create({
            container: {
              borderRadius:100,
              paddingRight: '2%',
              paddingLeft: '5%',
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