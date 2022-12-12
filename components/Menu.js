import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button, Image } from "react-native";


const Manueldutilisation = () => {

    return (
        <TouchableOpacity style={styles.container} onPress={()=>{alert("you clicked me")}}>
            <Text>
                 Manuel d'utilisation
            </Text>
        </TouchableOpacity>
        )
        }
        export default Manueldutilisation

        const styles = StyleSheet.create({
            container: {
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',

            },
            Manueldutilisation: {

              backgroundColor:"#AAAAAA",
            },
          });