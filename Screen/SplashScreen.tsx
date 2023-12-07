import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { getUser } from './AsyncStorage'

const SplashScreen = ({ navigation }:any) => {
  const fetch = async () =>{
    const a = await getUser()
    console.log("====== useEFFECT fetch",a)
    a == null ? navigation.navigate('Login') : navigation.replace('Home')
    return a
  }

  useEffect(() => {
       
    setTimeout(async () => {
    
      fetch()

    }, 1000)

  }, [])

  return (
    <View style={style.mainContainer}>
      <Image style={style.mainImg} source={require('./assets/onboarding-img2.png')} />
      <Text style={style.mainText}>A New Way To Connect With The World!</Text>
      {/* <TouchableOpacity style={style.loginBtn} onPress={ async () => {
        fetch() == undefined || fetch() == null ? navigation.navigate('Login') : navigation.replace('Home')
        }}>
        <Text style={style.loginBtnText}>Let's Start</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightpink',
  },
  mainImg: {
    width: 300,
    height: 300,
    margin: 50
  },
  mainText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffff',
  },
  loginBtn: {
    width: 150,
    height: 50,
    borderWidth: 1,
    textAlign: 'center',
    marginLeft:'30%',
    marginTop:40,
    backgroundColor: '#ffcccc',
    borderColor: '#ffe6e6',
    borderRadius: 5
  },
  loginBtnText: {
    textAlign: 'center',
    fontSize: 24,
    margin: 5
  }
})

export default SplashScreen