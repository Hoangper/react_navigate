import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { MainStackParamList } from './Navigate';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Bottom1 from '../screens/Bottom1';
import Bottom2 from '../screens/Bottom2';
import Bottom3 from '../screens/Bottom3';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<MainStackParamList>();

const HomeStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
    <Stack.Screen name="HomeStack" component={HomeStackNavigator}/> 
  </Stack.Navigator>
);


const HomeStackNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let imageName;
          if (route.name === 'Bottom1') {
            imageName = focused ? require('../image/fb_color.png') : require('../image/fb_noncolor.png');
          } else if (route.name === 'Bottom2') {
            imageName = focused ?  require('../image/ytb_color.png') : require('../image/ytb_noncolor.png');
          } else if (route.name === 'Bottom3') {
            imageName = focused ?  require('../image/ig_color.png') : require('../image/ig_noncolor.png');
          }
          return <Image source={imageName} style={{ width: 24, height: 24 }} />;
        },
      })}
    >
      <Tab.Screen name="Bottom1" component={Bottom1} />
      <Tab.Screen name="Bottom2" component={Bottom2} />
      <Tab.Screen name="Bottom3" component={Bottom3} />
    </Tab.Navigator>
  )
};



export { HomeStack, HomeStackNavigator };