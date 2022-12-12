import { PreventRemoveContext } from '@react-navigation/native';
import React from 'react';
import {View, Image, ScrollView, Dimensions} from 'react-native';



const {width} = Dimensions.get("window");
const height = width * 1;
const images =[
    require('../img/ModeHiFI.png'),
    require('../img/ModeULTRA.png')
]

//componentDidMount = () =>{
 //   setInterval(() => ({
   //     this.setState(prev => ({selectIndex: prev.selectIndex + 1 }), )
 //   }))
// }, 3000

export default class Carousel extends React.Component{

    render(){
        return(
            <View style= {{marginTop: 50, width, height}}>
                <ScrollView 
                pagingEnabled
                horizontal 
                showsHorizontalScrollIndicator = {true}
                style= {{width, height}}>
                {

                images.map ((image, index) => (
                <Image 
                key={index}
                source={image}
                style= {{width , height, resizeMode: 'cover'}}/>
            
                ))
                  
                }
                  </ScrollView>

            </View>
        )
    }
}