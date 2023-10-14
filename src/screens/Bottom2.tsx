import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../navigate/Navigate'

const Bottom2:React.FC<MainStackScreenProps<'Bottom2'>> = ({navigation,route}) => {
  return (
    <View style={{backgroundColor:'red',flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:50,color:'white'}}>Youtube đây nè</Text>
    </View>
  )
}

export default Bottom2

const styles = StyleSheet.create({})