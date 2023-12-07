import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';

const PostCard = ({item, navigation}: any) => {
  return (
    <View style={style.Container}>
      <View style={style.Card}>
        <View style={style.UserInfo}>
          <Image style={style.UserImg} source={item.UserImg} />
          <View style={style.UserInfoText}>
            <Text style={style.UserName}>{item.UserName}</Text>
            <Text style={style.messageTime}>{item.messageTime}</Text>
          </View>
        </View>
        <Text style={style.postText}>{item.postText}</Text>
        <Image style={style.postImg} source={item.postImg} />
        <View style={style.interactionWrapper}>
          <TouchableOpacity style={style.Interaction}>
            <Text style={style.InteractionText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.Interaction}>
            <Text style={style.InteractionText}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    backgroundColor: '#f8f8f8',
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  UserInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  UserName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    color: 'black',
  },
  messageTime: {
    fontSize: 10,
    color: 'black',
  },
  UserInfoText: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  postText: {
    fontSize: 12,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  postImg: {
    width: '100%',
    height: 250,
    marginTop: 15,
    borderRadius: 2,
  },
  interactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  Interaction: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
  },
  InteractionText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  Divider: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    width: '89%',
    marginLeft: 20,
    marginTop: 10,
  },
});

export default PostCard;
