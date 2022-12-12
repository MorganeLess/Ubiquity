import React from "react";
import  { FlatList,SafeAreaView,Text,View,StyleSheet,Button} from "react-native";
import { ResizeMode, Video } from 'expo-av';
import { useEffect, useReducer, useState } from 'react';
import { BleManager, Device } from 'react-native-ble-plx';
import { requestLocationPermission } from '../components/ble-permission.js'
import { DeviceCard } from "../Ble/BleComponents/DeviceCard"

const manager = new BleManager();

// Reducer to add only the devices which have not been added yet
// When the bleManager search for devices, each time it detect a ble device, it returns the ble device even if this one has already been returned
const reducer = (
  state: Device[],
  action: { type: 'ADD_DEVICE'; payload: Device } | { type: 'CLEAR' },
): Device[] => {
  switch (action.type) {
    case 'ADD_DEVICE':
      const { payload: device } = action;

      // check if the detected device is not already added to the list
      if (device && !state.find((dev) => dev.id === device.id)) {
        return [...state, device];
      }
      return state;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};


const PageRecherche = () => { 
  function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

  const [isFound,setIsFound] = useState(false);

  // reducer to store and display detected ble devices
  const [scannedDevices, dispatch] = useReducer(reducer, []);

  // state to give the user a feedback about the manager scanning devices
  const [isLoading, setIsLoading] = useState(false);

  const scanDevices = () => {
    const permission = requestLocationPermission();
    if (permission) {  
      // display the Activityindicator
      setIsLoading(true);
      
      // scan devices
      manager.startDeviceScan(null, {allowDuplicates: false}, (error, scannedDevice) => {
        if (error) {
          console.warn(error);
        }

            // stop scanning devices after 5 seconds
            setTimeout(() => {
              manager.stopDeviceScan();
              setIsLoading(false);
            }, 5000);



        // if a device is detected add the device to the list by dispatching the action into the reducer
        if (scannedDevice) {
          //console.log(scannedDevice.id + "\n")
          if(scannedDevice.name === "PROTON V2 LE"){
            console.log(scannedDevice.name);
            dispatch({ type: 'ADD_DEVICE', payload: scannedDevice });
            setIsFound(true);
          }
        }
      });
    };
  }

  

const video = React.useRef(null);
const [status, setStatus] = React.useState({});

useEffect(() => {
  return () => {
    manager.destroy();
  };
}, []);
if(isFound == false){
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.backgroundVideo}
          source={require("../img/Wifi.mp4")}
          resizeMode = {ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={setStatus}
          onLoad={async() => {video.current.playFromPositionAsync(5000).then(() => {sleep(2000).then(() => {scanDevices()})})}}
          
          
        />
      </View>
    
      <View>
        <Text style = {styles.text}> Nous recherchons votre produit</Text>
      </View>
    </View>
    );
}
else{
  return(
    <SafeAreaView  style={styles.body}>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={scannedDevices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

}


export default PageRecherche

const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#000000'},
  backgroundVideo: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: "center"
  },

  text:{
    color: '#ffffff',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 60
 },
 body: {
  flex: 1,
  backgroundColor: '#000000',
  justifyContent: 'flex-start'

},
});