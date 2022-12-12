import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
const Réglage = () => { 
  const navigation = useNavigation();
    return(
      <View style = {styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Manueldutilisation')}>
            <Text style ={styles.textStyle}> 
                Manuel d'utilisation
            </Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GuideDeDemarrage')}>
            <Text style ={styles.textStyle}> 
               Guide de démarrage rapide 
            </Text>
        </TouchableOpacity>
            <Text style ={styles.textStyle}> 
                Version: 1
            </Text>
      </View>

            
    )

}

export default Réglage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'flex-end',
      justifyContent: 'right',
      

  
    },
    textStyle: {
      color: '#ffffff',
      padding: 12,
      fontSize: 18,
      
    },
  });