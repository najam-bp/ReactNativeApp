import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MessagesScreen from './MessagesScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QrCodeScreen from './QrHomeScreen';
import {getUser} from './AsyncStorage';

const Tab = createBottomTabNavigator();

const MainHomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={MessagesScreen}
        options={{
          title: '',
          tabBarIcon: () => <Ionicons name="home" color={'gray'} size={25} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="chat-processing"
              color={'gray'}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="QR"
        component={QrCodeScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={'gray'}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <FontAwesome name="user" color={'gray'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainHomeScreen;
