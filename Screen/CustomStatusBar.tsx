import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {removeUser} from './AsyncStorage';

const CustomStatusBar = ({
  title,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  leftButtonLable,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  LeftButtonAction,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}: any) => {
  const navigation = useNavigation();
  return (
    <View style={style.header}>
      <IconButton
        // eslint-disable-next-line react/no-unstable-nested-components
        icon={() => {
          return <FontAwesome name="arrow-left" color={'#fff'} size={25} />;
        }}
        size={20}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Text style={style.headerText}>{title}</Text>
      <IconButton
        // eslint-disable-next-line react/no-unstable-nested-components
        icon={() => {
          return <SimpleLineIcons name="logout" color={'#fff'} size={25} />;
        }}
        size={20}
        onPress={async () => {
          await removeUser();
          navigation.replace('Login');
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  headerText: {
    fontFamily: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    fontSize: 30,
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
    borderRadius: 30,
    backgroundColor: 'lightblue',
  },
});

export default CustomStatusBar;

// <View style={{ backgroundColor, height: StatusBar.currentHeight }}>
//     <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} />
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
//         <TouchableOpacity onPress={leftButtonLable}>
//             <Text>{leftButtonLable}</Text>
//         </TouchableOpacity>
//     </View>
// </View>
