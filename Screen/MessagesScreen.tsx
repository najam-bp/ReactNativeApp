import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import PostCard from './PostCard';
import CustomStatusBar from './CustomStatusBar';
import {getUser} from './AsyncStorage';

const Posts = [
  {
    id: 1,
    UserName: 'Jenny Deo',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '14 mints ago',
    postText:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 2,
    UserName: 'Peter',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '3 mints ago',
    postText:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 3,
    UserName: 'Shaun Tait',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '35 mints ago',
    postText:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 4,
    UserName: 'Lisa',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '1 hours ago',
    postText:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 5,
    UserName: 'Jenny Deo',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '2 hours ago',
    postText:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
];

const MessagesScreen = () => {
  return (
    <SafeAreaView>
      <CustomStatusBar
        title="RN Social"
        backgroundColor="#ffb3b3"
        rightButtonLable="Home"
      />
      <FlatList
        data={Posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={(item: {id: any}) => item.id}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
