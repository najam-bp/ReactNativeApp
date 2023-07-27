import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomStatusBar from './CustomStatusBar'

const Messages = [
  {
    id: 1,
    UserName: 'Jenny Deo',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '14 mints ago',
    postText: 'Hey there, this is my test for a post.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 2,
    UserName: 'Peter',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '3 mints ago',
    postText: 'Hey there, this is my test for a post.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 3,
    UserName: 'Shaun Tait',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '35 mints ago',
    postText: 'Hey there, this is my test for a post.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 4,
    UserName: 'Lisa',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '1 hours ago',
    postText: 'Hey there, this is my test for a post.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  },
  {
    id: 5,
    UserName: 'Jenny Deo',
    UserImg: require('../Screen/assets/user-3.jpeg'),
    messageTime: '2 hours ago',
    postText: 'Hey there, this is my test for a post.',
    postImg: require('../Screen/assets/post-img-3.jpeg'),
  }
]

const ChatScreen = ({ navigation }: any) => {
  return (
    <View style={style.Container}>
      <CustomStatusBar
        title='Messages'
        backgroundColor='#ffb3b3'
        rightButtonLable='Home'
      />
      <FlatList
        data={Messages}
        keyExtractor={(item: { id: any; }) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ width: '100%' }} onPress={()=>navigation.navigate('Chating', {UserName: item.UserName})}>
            <View style={style.userInfo}>
              <View style={style.UserImgWrapper}>
                <Image style={style.UserImg} source={item.UserImg} />
              </View>
              <View style={style.TextSection}>
                <View style={style.UserInfoText}>
                <Text style={style.UserName}>{item.UserName}</Text>
                </View>
                <Text style={style.MessageText}>{item.postText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#F8F8FF'
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  TextSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  UserInfoText: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'center'
  },
  UserName: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
    marginLeft:-230
  },
  MessageTime: {
    fontSize: 12,
    color: '#666',

  },
  MessageText: {
    fontSize: 14,
    color: '#333333'
  }

})


export default ChatScreen







// import styled from 'styled-components';

// export const Container = styled.View`
//   flex: 1;
//   padding-left: 20px;
//   padding-right: 20px;
//   align-items: center;
//   background-color: #ffffff;
// `;

// export const Card = styled.TouchableOpacity`
//   width: 100%;
// `;

// export const UserInfo = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const UserImgWrapper = styled.View`
//   padding-top: 15px;
//   padding-bottom: 15px;
// `;

// export const UserImg = styled.Image`
//   width: 50px;
//   height: 50px;
//   border-radius: 25px;
// `;

// export const TextSection = styled.View`
//   flex-direction: column;
//   justify-content: center;
//   padding: 15px;
//   padding-left: 0;
//   margin-left: 10px;
//   width: 300px;
//   border-bottom-width: 1px;
//   border-bottom-color: #cccccc;
// `;

// export const UserInfoText = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 5px;
// `;

// export const UserName = styled.Text`
//   font-size: 14px;
//   font-weight: bold;
//   font-family: 'Lato-Regular';
// `;

// export const PostTime = styled.Text`
//   font-size: 12px;
//   color: #666;
//   font-family: 'Lato-Regular';
// `;

// export const MessageText = styled.Text`
//   font-size: 14px;
//   color: #333333;
// `;