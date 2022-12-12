import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Device } from 'react-native-ble-plx';
import Proton from '../../components/Proton';
import { RFPercentage } from "react-native-responsive-fontsize";


type DeviceCardProps = {
  device: Device;
};

const DeviceCard = ({ device }: DeviceCardProps) => {
  const navigation = useNavigation();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // is the device connected?
    device.isConnected().then(setIsConnected);
  }, [device]);

  return (
    <View style = {{padding: '10%'}}>
      <Text style= {{color: '#FFFFFF', fontSize: RFPercentage(4), padding: '10%'}}> Est ce bien votre produit ?</Text>
   
    <View
      style={styles.container}
      // navigate to the Device Screen
      >
      <Text style = {styles.styleName}>{` ${device.name}`}</Text>
      {/*<Text style = {styles.styleText}>{`Id : ${device.id}`}</Text>
      <Text style = {styles.styleName}>{` ${device.name}`}</Text>
      <Text style = {styles.styleText}>{`Is connected : ${isConnected}`}</Text>
      <Text style = {styles.styleText}>{`RSSI : ${device.rssi}`}</Text>
       Decode the ble device manufacturer which is encoded with the base64 algorythme 
      <Text style = {styles.styleText}>{`Manufacturer : ${Base64.decode(
        device.manufacturerData?.replace(/[=]/g, ''),
      )}`}</Text>
      <Text style = {styles.styleText}>{`ServiceData : ${device.serviceData}`}</Text>
      <Text style = {styles.styleText}>{`UUIDS : ${device.serviceUUIDs}`}</Text>*/}
     <View>
     <Proton/>
     </View>
     <View>
     <TouchableOpacity onPress={async () => {
      
      await device.connect().then(
        navigation.navigate('Home', { device })
        )
      }}>
      <Text style = {styles.styleBouton}> Selectionner </Text>
     </TouchableOpacity>
     </View>

    </View>
    </View>
    );
};



const styles = StyleSheet.create({
  container: {
    
    justifyContent:'center',
    backgroundColor: 'white',

    borderRadius: 16,

    padding: '8%',
    width: '95%',
    height: '70%'
  },

  scrollStyle:{
    padding: 12,

  },

  styleText: {

    color: '#FFFFFF',
  },

  styleName:{

  
    color: '#000000',
    fontSize:  RFPercentage(3.5),
    textAlign: 'center'
  },

  styleBtn:{

  },

  styleBouton:{
    color: '#000000',
    backgroundColor: '#AAAAAA',
    padding: 15,
    textAlign: 'center',
    fontSize: RFPercentage(3),
    borderRadius: 16,
    borderColor: '#000000',
    borderWidth: 0.5,
  
  },

});

export { DeviceCard };