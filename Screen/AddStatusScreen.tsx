import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AddStatusScreen = ({
  title,
  backgroundColor,
  leftButtonLable,
  LeftButtonAction,
  ...props
}: any) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={style.header}>
        <IconButton
          icon={() => {
            return <FontAwesome name="arrow-left" color={'gray'} size={25} />;
          }}
          size={20}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={style.headerText}>{title}</Text>
        <IconButton
          icon={() => {
            return (
              <TouchableOpacity>
                <Text
                  style={{fontSize: 12, color: '#0000e6', fontWeight: 'bold'}}>
                  POST
                </Text>
              </TouchableOpacity>
            );
          }}
          size={20}
          // onPress={()=>{navigation.navigate('addStatus')}}
        />
      </View>
      <View style={style.Container}>
        <View style={style.InputWrapper}>
          <TextInput
            style={style.InputField}
            placeholder="What's on your mind?"
            multiline
            numberOfLines={4}
          />
        </View>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Take Photo"
            onPress={() => console.log('notes tapped!')}>
            <MaterialIcon name="photo-camera" style={style.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Choose Photo"
            onPress={() => {}}>
            <FontAwesome name="photo" style={style.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>

      {/* <Tab.Navigator>
        <Tab.Screen name='home' component={MessagesScreen}
          options={{
            title: '',
            tabBarIcon: () => (
              <FontAwesome name='home' color={'gray'} size={25} />
            ),
          }}
        />

        <Tab.Screen name='Chat' component={ChatScreen}
          options={{
            title: '',
            tabBarIcon: () => (
              <FontAwesome name='chat-processing' color={'gray'} size={25} />
            ),
          }}
        />

        <Tab.Screen name='Profile' component={ProfileScreen}
          options={{
            title: '',
            tabBarIcon: () => (
              <FontAwesome name='user' color={'gray'} size={25} />
            ),
          }}
        />
      </Tab.Navigator> */}
    </>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2e64e515',
  },
  InputField: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
    width: '90%',
    color: 'black',
  },
  headerText: {
    fontFamily: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 0.9,
    fontSize: 22,
    // marginRight: Dimen.width/7
  },

  sideIcon: {
    width: 22,
    height: 17,
    resizeMode: 'contain',
    marginRight: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default AddStatusScreen;
