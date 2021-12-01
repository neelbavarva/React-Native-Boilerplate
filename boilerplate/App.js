import React from 'react';
import { Dimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Profile from './screens/Profile/Profile';

import DrawerContent from './navigation/DrawerContent';

const { width, height } = Dimensions.get("window");
const Drawer = createDrawerNavigator();

export default function App({navigation}){

  return (
    <NavigationContainer>
        <Drawer.Navigator 
            initialRouteName = "Home"
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{
                width: width*(2/3),
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Screen1" component={Screen1} />
            <Drawer.Screen name="Screen2" component={Screen2} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};