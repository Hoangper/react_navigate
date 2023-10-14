import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../navigate/Navigate'

const Info: React.FC<MainStackScreenProps<"Info">> = ({ navigation }) => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
     <Text style={{textAlign:'center',fontSize:50}}>In Tư đây nè</Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({})