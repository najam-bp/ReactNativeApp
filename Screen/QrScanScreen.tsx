import {View, Text, StyleSheet, Linking} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
// import { err } from 'react-native-svg/lib/typescript/xml';

const QrScanScreen = () => {
  const onSuccess = async (e: {data: string} | any) => {
    console.log('Access');
    console.log(e);
  };
  return (
    <QRCodeScanner
      onRead={e => onSuccess(e.data)}
      flashMode={RNCamera.Constants.FlashMode.torch}
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrScanScreen;

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
