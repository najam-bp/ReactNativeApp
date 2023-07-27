import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const CustomStatusBar = ({ title, backgroundColor, leftButtonLable, LeftButtonAction, ...props }:any) => {
    const navigation = useNavigation();
    return (
        <View style={style.header}>
               <IconButton 
            icon={()=>{
                return  <FontAwesome name='arrow-left' color={'gray'} size={25} />
            }}

            size={20}
            onPress={()=>{navigation.navigate('Login')}}
            />
            <Text style={style.headerText}>
            {title}
            </Text>
            <IconButton 
            icon={()=>{
                return  <FontAwesome name='plus' color={'gray'} size={25} />
            }}

            size={20}
            onPress={()=>{navigation.navigate('addStatus')}}
            />
        </View>
    )   
}

const style = StyleSheet.create({
    headerText:{
        fontFamily: 'bold',
        color: "black",
        textAlign:'center',
        flex:1,
        fontSize:30,
        // marginRight: Dimen.width/7
    },

    sideIcon:{
        width: 22,
        height:17,
        resizeMode:'contain',
        marginRight:10
    },

    header: {
        flexDirection:"row", alignItems:"center", width:'100%', paddingTop:40, paddingBottom:10
    }
})

export default CustomStatusBar






  // <View style={{ backgroundColor, height: StatusBar.currentHeight }}>
        //     <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} />
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
        //         <TouchableOpacity onPress={leftButtonLable}>
        //             <Text>{leftButtonLable}</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>

       