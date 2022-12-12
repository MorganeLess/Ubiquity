import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button, Image } from "react-native";

const BtnHifi = () => {
  
  var [isPress, setIsPress] = React.useState(false);
  
  const handleClick = () => {
    // 👇️ toggle
    setIsPress(current => !current);

    // 👇️ or set to true
    //setIsPress(true);
  };
    return (

      <View>
        <TouchableOpacity style={styles.container} onPress={handleClick} >
          <Text style={isPress ? styles.btnPress : styles.btnNormal} > HiFi </Text>
        </TouchableOpacity>
      </View>


        
        )
        }
        export default BtnHifi

        const styles = StyleSheet.create({
          container: {
            backgroundColor: '#AAAAAA',
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            width: 115,
            overflow: 'hidden'
         },
         btnPress: {
          shadowColor: 'rgba(0,0,0, 1)', // IOS
          shadowOffset: { height: 1, width: 1 }, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS
          elevation: 2, // Android
          borderRadius: 25,
          fontSize: 30,
          padding: 15,
          textAlign : 'center',
          backgroundColor:"#F3EBEB",
          overflow: 'hidden'
        },
        btnNormal: {
          borderRadius:25,
          fontSize: 30,
          textAlign : 'center',
          backgroundColor:"#AAAAAA",
          padding: 15,
          overflow: 'hidden'
        },
          });