import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import React from 'react'
import CustomStatusBar from './CustomStatusBar';
// import { useNavigation } from '@react-navigation/native';




const QrHomeScreen = ({navigation}:any) => {
    // const navigation = useNavigation()
    return (
        <View style={style.Container}>
            <CustomStatusBar
                title='Generate QR'
                backgroundColor='#ffb3b3'
                rightButtonLable='Home'
            />
            <TouchableOpacity style={style.QrScan} onPress={() => navigation.navigate('QRScan')}>
                <Text style={{ paddingHorizontal: 20, color: 'red', fontWeight: 'bold' }}>Scan QR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.QrScan} onPress={() => navigation.navigate('QRGenerate')}>
                <Text style={{ paddingHorizontal: 20, color: 'red', fontWeight: 'bold' }}>Generate QR</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1
    },
    QrScan: {
        borderColor: '#ffcecc',
        backgroundColor: '#ffa5a7',
        textAlign: 'center',
        width: 200,
        padding: 10,
        borderRadius: 5,
        marginLeft: 30,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})



export default QrHomeScreen