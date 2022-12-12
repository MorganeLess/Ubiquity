import React, { useEffect, useReducer, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DeviceCard } from '../BleComponents/DeviceCard';
import { BleManager, Device } from 'react-native-ble-plx';
import { theme } from '../BleTheme';
import { Directions } from 'react-native-gesture-handler';

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

//const HomeScreen = () => {
  // reducer to store and display detected ble devices
  const [scannedDevices, dispatch] = useReducer(reducer, []);

  // state to give the user a feedback about the manager scanning devices
  const [isLoading, setIsLoading] = useState(false);

  const scanDevices = () => {
    // display the Activityindicator
    setIsLoading(true);
    
    // scan devices
    manager.startDeviceScan(null, {allowDuplicates: false}, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }

      // if a device is detected add the device to the list by dispatching the action into the reducer
      if (scannedDevice) {
        console.log(scannedDevice.id + "\n")
        if(scannedDevice.name === "PROTON V2 LE")
          dispatch({ type: 'ADD_DEVICE', payload: scannedDevice });
      }
    });

    // stop scanning devices after 5 seconds
    setTimeout(() => {
      manager.stopDeviceScan();
      setIsLoading(false);
    }, 5000);
  };
/*
  const ListHeaderComponent = () => (
    <View  style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step One</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title="Clear devices"
          onPress={() => dispatch({ type: 'CLEAR' })}
        />
        {isLoading ? (
          <View  style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={'teal'} size={25} />
          </View>
        ) : (
          <Button title="Rechercher votre appareil" onPress={scanDevices} />
        )}
      </View>
    </View>
  );

  useEffect(() => {
    return () => {
      manager.destroy();
    };
  }, []);
  return (

    <SafeAreaView  style={styles.body}>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={scannedDevices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-start'
  
  },


  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#aaaaaa',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#aaaaaa',
  },
  content: {
    backgroundColor: '#000000',
    paddingHorizontal: theme.spacing * 2,
  },
  activityIndicatorContainer: { marginVertical: 6},
});
*/
export { scanDevices };