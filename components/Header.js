import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const Header = (props) =>{
    const navigation = useNavigation();
    return (
        <View style={styles.headerStyle}>

            <Text style = {styles.textStyle}> U B I Q U I T Y</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Réglage')}  style ={{marginRight:20 }}>
            <FontAwesome style={styles.naviconStyle} name = 'navicon' size={30} color= '#ffffff' />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

headerStyle:{
    height: '12%',
    backgroundColor: '#484848',
    flexDirection: 'row',
    justifyContent:'space-between'
  
},

textStyle:{
    fontSize: RFPercentage(4), 
    color:"#fff",
    paddingTop: '5%',
    paddingLeft: '23%'
    
},

naviconStyle:{
    paddingTop: '5%',


}

});

export default Header

