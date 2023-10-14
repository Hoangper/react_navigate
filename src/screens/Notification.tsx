import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../navigate/Navigate'

const Notification : React.FC<MainStackScreenProps<"Notification">> = ({ navigation }) => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:50}}>Thông Báo đây nè</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})