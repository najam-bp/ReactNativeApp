import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomStatusBar from './CustomStatusBar';
import QRCode from 'react-native-qrcode-svg';



const QrHomeScreen = () => {
    const [QrCodeText, setQrCodeText] = useState('')
    return (
        <SafeAreaView style={style.Container}>
            <CustomStatusBar
                title='Generate QR'
                backgroundColor='#ffb3b3'
                rightButtonLable='Home'
            />
            <TextInput style={style.QRfield}
                placeholder='Generate QR' 
                placeholderTextColor='black'
                value={QrCodeText}
                onChangeText={(Text)=>setQrCodeText(Text)}
                />


            <View style={style.QRstyle}>
                <QRCode
                    value={QrCodeText ? QrCodeText : 'https://www.google.com/'}
                    size={200}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F5FFFA'
    },
    QRfield: {
        borderWidth: 2,
        margin: 20,
        borderRadius: 10,
        borderColor: '#DCDCDC',
        padding: 5,
        color:'black'
    },
    QRstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default QrHomeScreen