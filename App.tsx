import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Info from './src/screens/Info';
import Notification from './src/screens/Notification';
import { HomeStack } from './src/navigate/HomeStack';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Info" component={Info} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}
const App: React.FC = () => {

  return (
    <NavigationContainer>
      {/* <HomeStack/> */}
      <MyDrawer/>
    </NavigationContainer>
  );
};



export default App;