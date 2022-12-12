import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import Home from "./screens/Home";
import Réglage from "./screens/Réglage";
import Header from "./components/Header";
import Manueldutilisation from "./screens/Manueldutilisation"
import GuideDeDemarrage from "./screens/GuideDeDemarrage";
import PageCarousel from "./screens/PageCarousel";
import pageRecherche from "./screens/PageRecherche";
import Device from "./Ble/BleScreens/Device"

import { LogBox } from 'react-native';
//LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state','new NativeEventEmitter']);

const Stack = createStackNavigator();


function App() {
  /* A hook that allows you to navigate to another screen. */
  const navigation = useNavigation();
  return ( 
  
    <Stack.Navigator>
      <Stack.Screen
    name='PageCarousel'
    component={PageCarousel}
    options={{ 
      
      headerShown:null

    }}
  />
    <Stack.Screen
    name='PageRecherche'
    component={pageRecherche}
    options={{headerShown:null
    }}
  />

  <Stack.Screen
      name='Home'
    component={Home}
    options={{headerShown:null}}
    />

<Stack.Screen
    name='Device'
    component={Device}
    options={{headerShown:null
    }}
  />


  <Stack.Screen
      name='Réglage'
      component={Réglage}
      options={{
        title: 'Paramètres',
   
      
        headerStyle:{
          height: 120,
          backgroundColor: '#000000',
          borderBottomWidth: 0.5,
          borderEndColor: "#FFFFFF",
        
        },

        headerTitleStyle: {
          color: '#FFFFFF',
          fontSize: 20,
        },
      }}/>

<Stack.Screen
      name="Manueldutilisation"
      component={Manueldutilisation}
      options={{

        headerStyle:{
          height: 120,
          backgroundColor: '#000000',
          shadowColor: '000',
          borderBottomWidth: 1,
          borderEndColor: "#ffffff",
          elevation: 12,

        }
      }}/>

<Stack.Screen
      name="GuideDeDemarrage"
      component={GuideDeDemarrage}
      options={{

        headerStyle:{
          height: 120,
          backgroundColor: '#000000',
          shadowColor: '000',
          borderBottomWidth: 1,
          borderEndColor: "#ffffff",
          elevation: 12,

        }
      }}/>


      
      
    </Stack.Navigator>
    
    );
  }

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    
  )

}
