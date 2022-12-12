import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button, Image } from "react-native";

const BtnUltra = () => {

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
          <Text style={isPress ? styles.btnPress : styles.btnNormal} > Ultra </Text>
        </TouchableOpacity>
      </View>


        
        )
        }
        export default BtnUltra

        const styles = StyleSheet.create({
          container: {
              backgroundColor: '#AAAAAA',
              width: 122,
           },
          btnPress: {
            shadowColor: 'rgba(0,0,0, 1)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            textAlign:'center',
            fontSize: 30,
            borderRadius: 25,
            backgroundColor:"#F3EBEB",
            padding: 15,
            overflow: 'hidden',

          },
          btnNormal: {
            textAlign:'center',
            fontSize: 30,
            backgroundColor:"#AAAAAA",
            padding: 15,
            overflow: 'hidden',

          },
          });