import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../navigate/Navigate'

const Screen1: React.FC<MainStackScreenProps<"Screen1">> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Home</Text>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text} onPress={() => navigation.navigate("Screen2")}>Đăng Kí</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtn_}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text} onPress={() => navigation.navigate("HomeStack")}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  text: {
    fontSize:20,
    color:'white',
    
  },
  btn: {
    backgroundColor: 'blue',
    width:100,
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  viewBtn: {
    alignItems: 'center',
    paddingVertical: 66
  },
  viewBtn_: {
    alignItems: 'center',
  }
})