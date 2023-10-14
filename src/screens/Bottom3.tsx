import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../navigate/Navigate'

const Bottom3:React.FC<MainStackScreenProps<'Bottom3'>> = ({navigation,route}) => {
  return (
    <View style={{backgroundColor:'pink',flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:50,color:'white'}}>Instagram đây nè</Text>
    </View>
  )
}

export default Bottom3

const styles = StyleSheet.create({})