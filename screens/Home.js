import { View, Text, Button,StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
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
    var [isHIFIPress, setIsHIFIPress] = React.useState(false);
    var [isUltraPress, setIsUltraPress] = React.useState(false);
    var [isBassPress, setIsBassPress] = React.useState(false);
  
    const handleClick = (btnName) => {
      if(btnName === "HIFI"){
          setIsHIFIPress(current = true);
          setIsUltraPress(current = false);
          setIsBassPress(current = false);
      }
      else if(btnName === "ULTRA"){
        setIsHIFIPress(current = false);
        setIsUltraPress(current = true);
        setIsBassPress(current = false);
      }
      else if(btnName === "BASS"){
        setIsHIFIPress(current = false);
        setIsUltraPress(current = false);
        setIsBassPress(current = true);
      }
    };
    
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
          <TouchableOpacity style={styles.Hificontainer} onPress={ () => handleClick("HIFI")} >
            <Text style={isHIFIPress ? styles.btnHifiPress : styles.btnHifiNormal} > HiFi </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Ultracontainer} onPress={() => handleClick("ULTRA")} >
            <Text style={isUltraPress ? styles.btnUltraPress : styles.btnUltraNormal} > Ultra </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Basscontainer} onPress={() => handleClick("BASS")}>
            <Text style={isBassPress ? styles.btnBassPress : styles.btnBassNormal} > Bass</Text>
          </TouchableOpacity>   
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
  Basscontainer: {
    backgroundColor: '#AAAAAA',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
    width: 115,
 },
 btnBassPress: {
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

btnBassNormal: {
  borderRadius:25,
  fontSize: 30,
  textAlign : 'center',
  backgroundColor:"#AAAAAA",
  padding: 15,
},

Ultracontainer: {
  backgroundColor: '#AAAAAA',
  width: 122,
},
btnUltraPress: {
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
btnUltraNormal: {
textAlign:'center',
fontSize: 30,
backgroundColor:"#AAAAAA",
padding: 15,
overflow: 'hidden',

},


Hificontainer: {
  backgroundColor: '#AAAAAA',
  borderTopLeftRadius: 25,
  borderBottomLeftRadius: 25,
  width: 115,
  overflow: 'hidden'
},
btnHifiPress: {
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
btnHifiNormal: {
  borderRadius:25,
  fontSize: 30,
  textAlign : 'center',
  backgroundColor:"#AAAAAA",
  padding: 15,
  overflow: 'hidden'
},
});