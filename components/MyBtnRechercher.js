import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BtnRecherche = () => {
  const navigation = useNavigation();
    return (

        <View>
          <TouchableOpacity style={styles.styleBtn} onPress={() => navigation.navigate('PageRecherche')} >
            <Text style={ styles.btnstyle}> Rechercher un appareil </Text>
          </TouchableOpacity>
        </View>
  
  
          
          )
    
}

export default BtnRecherche

const styles = StyleSheet.create({
    container: {
      flex:1
      
    },

    styleBtn : {
      color: '#000000',
      backgroundColor: '#AAAAAA',
      padding: 15,
      textAlign: 'center',
      fontSize: 23,
      borderRadius: 16,
      borderColor: '#FFFFFF',
      borderWidth: 0.5,
      
      
   
    
   },
   btnstyle: {

    fontSize: 25,
    color:'black',
    
  }


}
)