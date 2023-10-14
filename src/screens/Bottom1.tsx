import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../navigate/Navigate'

const Bottom1:React.FC<MainStackScreenProps<'Bottom1'>> = ({navigation,route}) => {
  return (
    <View style={{backgroundColor:'blue',flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:50,color:'white'}}>Facebook đây nè</Text>
    </View>
  )
}

export default Bottom1

const styles = StyleSheet.create({})