import { View , StyleSheet, Text, Image} from "react-native";
import React from "react";
import Carousel from "../components/Carousel";
import BtnRecherche from "../components/MyBtnRechercher";

const PageCarousel = () => { 
    return(
      <View style = {styles.container}>
        <Text style = {styles.styleTitre}> U B I Q U I T Y </Text>
        <Image source={require("../img/Visuel_Neon.jpg")} style = {styles.styleImg}/>
        <Text style = {styles.styleText}> Déchaînez la puissance </Text>
        <BtnRecherche style = {styles.styleBtn} />
      </View>
      
      )}

export default PageCarousel

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#000000',  
    alignItems: 'center',
    alignContent: 'center',
    flexDirection:'column',
    padding: 25,
    
    
    
  },

  styleTitre: {

    flex:1,
    color: '#FFFFFF',
    fontSize: 30,
    paddingBottom: '5%',
    paddingTop: '20%',

    

    
  },

  styleBtn: {

    


    },

   styleImg: {

    width: '95%',
    height: '50%',
  
  
    
  
   },

   styleText:{

    flex:1,
    fontSize: 25,
    paddingTop: 30,
    color: '#FFFFFF',
   

   }



});