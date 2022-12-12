import { View, Text, Button,StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import BtnPower from "../components/MyBtnPower";
import BtnLed from "../components/MyBtnLed";
import BtnJack from "../components/MyBtnJack";
import BtnPairing from "../components/MyBtnPairing";
import BtnHifi from "../components/MyBtnModeHifi";
import BtnUltra from "../components/MyBtnModeUltra";
import BtnBass from "../components/MyBtnModeBass";
import ProtonHome from "../components/ProtonHome";
import Header from "../components/Header";

const Home = () => {
    const image = require('../img/cielEtoilé3.png');
    var flagPower, flagLed, flagJack, flagPairing;
    
    return (
      <ImageBackground source={image} style = {styles.background}>
        <Header/>
      <View style={styles.container}>
        <View style={styles.viewProton}>
          <ProtonHome/>
        </View>
     
        
        <View style = {styles.BoutonStyle}>
          <BtnPower/>
          <BtnLed/>
          <BtnJack/>
          <BtnPairing/>
        </View>

        <View style = {styles.ModeStyle}>
          <BtnHifi/>
          <BtnUltra/>
          <BtnBass/>    
        </View>      
      </View>
      </ImageBackground>
            
            
           
    )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    flexDirection:'column'
  },
  background:{
    flex: 1
  },
  viewProton: {
   
    justifyContent:'center',
    alignContent: 'center',
    width: '80%',
    height: '75%',

  },

  ModeStyle: {
    flexDirection:'row',
    borderTopWidth: 0.5,
    borderColor: '#ffffff',
    paddingTop:'5%',
    paddingBottom: '5%',
    paddingRight: '1%',
    paddingLeft: '1%'

  },

  BoutonStyle: {
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',
    paddingBottom:'5%',
    paddingLeft: '1.5%'
  },
});