import React, { useState } from 'react'
import { TextInput, StyleSheet, View, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';


const ChatingScreen = () => {

  const [messagesList, setMessagesList] = useState<any>([])
  const [messages, setMessages] = useState("")

  console.log(messagesList)

  const SendMessage = () => {
    console.log(messages)
  }

  const ClearField = () => {
    const tempList = [...messagesList]
    tempList.push(messages)

    setMessagesList(tempList)

    setMessages("")
    SendMessage()
  }





  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 2 }}>
          {
            messagesList.map((item: any) => {
              return <Text style={{
                color: 'black',
                borderWidth: 1,
                borderColor: '#D3D3D3',
                padding: 2,
                margin: 5
              }}> me : {item}</Text>
            })
          }
        </View>
      </ScrollView>

      <View style={style.wrapper}>
        <View style={{ flex: .8 }}>
          <TextInput placeholder='Type to Text' placeholderTextColor='black' style={{ color: 'black' }} multiline
            value={messages}
            onChangeText={(Text) => setMessages(Text)}
          />
        </View>
        <TouchableOpacity style={{ flex: .2, justifyContent: "center", alignItems: "center", borderLeftWidth: 1, borderColor: "#cccrr" }}>
          <Text style={{ color: '#1E90FF', fontWeight: 'bold' }} onPress={() => ClearField()}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 'auto',
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0
  },
})



export default ChatingScreen