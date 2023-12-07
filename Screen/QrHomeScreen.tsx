import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import CustomStatusBar from './CustomStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

const QrHomeScreen = ({navigation}: any) => {
  // const navigation = useNavigation()
  return (
    <View style={style.Container}>
      <CustomStatusBar
        title="SCANNER"
        backgroundColor="#ffb3b3"
        rightButtonLable="Home"
      />
      <View>
        <MaterialIcons
          style={{marginLeft: 80, marginTop: 20}}
          name="qr-code-scanner"
          color={'#d6d5d5'}
          size={200}
        />
      </View>
      <TouchableOpacity
        style={style.QrScan}
        onPress={() => navigation.navigate('QRScan')}>
        <Text style={{paddingHorizontal: 20, color: 'red', fontWeight: 'bold'}}>
          Scan QR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.QrScan}
        onPress={() => navigation.navigate('QRGenerate')}>
        <Text style={{paddingHorizontal: 20, color: 'red', fontWeight: 'bold'}}>
          Generate QR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  QrScan: {
    borderColor: '#ffcecc',
    backgroundColor: '#ffa5a7',
    textAlign: 'center',
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default QrHomeScreen;
