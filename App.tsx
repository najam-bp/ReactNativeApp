import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './Screen/LoginScreen';
import { enableScreens } from 'react-native-screens';
import SignUpScreen from './Screen/SignUpScreen';
import MainHomeScreen from './Screen/MainHomeScreen';
import MessagesScreen from './Screen/MessagesScreen';
import ChatScreen from './Screen/ChatScreen';
import UserScreen from './Screen/ProfileScreen';
import SplashScreen from './Screen/SplashScreen';
import AddStatusScreen from './Screen/AddStatusScreen';
import ChatingScreen from './Screen/ChatingScreen';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

enableScreens(true);

const options = { headerShown: false }


function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Stack.Navigator>
        <Stack.Screen name='WelCome' component={SplashScreen} options={options} />
        <Stack.Screen name='Login' component={LoginScreen} options={options} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={options} />
        <Stack.Screen name='Home' component={MainHomeScreen} options={options} />
        <Stack.Screen name='Chat' component={ChatScreen} options={options} />
        <Stack.Screen name='addStatus' component={AddStatusScreen} options={options} />
        <Stack.Screen name='Messages' component={MessagesScreen} options={options} />
        <Stack.Screen name='Chating' component={ChatingScreen} options={({ route }) => ({
          title: route.params.UserName,
          // headerBackTitleVisible: false
        })} />
        <Stack.Screen name='User' component={UserScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
