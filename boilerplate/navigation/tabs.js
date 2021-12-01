import React from "react";
import { View, Image, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";

const Tab = createBottomTabNavigator()

export default function Tabs() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                drawUnderTabBar: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderTopColor: "transparent",
                    height: 100,
                    paddingBottom: 10
                }
            }}
        >
            <Tab.Screen
                name="Screen1"
                component={Screen1}
                options={{
                    tabBarIcon:({focused}) => (
                        
                        <View 
                            style={{
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                backgroundColor: focused ? '#DEEBA0' : null, 
                                padding: 10,
                                paddingHorizontal: 30, 
                                borderRadius: 100
                            }}
                        >
                            <Image
                                source={require('../assets/icons/item.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#6A7439' : 'grey'
                                }}
                            />
                            <Text style={{color: focused ? '#6A7439' : 'grey', fontFamily: 'GothamMedium', fontSize: 10, marginTop: 5}}>Screen1</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="Screen2"
                component={Screen2}
                options={{
                    tabBarIcon:({focused}) => (
                        
                        <View 
                            style={{
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                backgroundColor: focused ? '#DEEBA0' : null, 
                                padding: 10,
                                paddingHorizontal: 30, 
                                borderRadius: 100
                            }}
                        >
                            <Image
                                source={require('../assets/icons/item.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#6A7439' : 'grey'
                                }}
                            />
                            <Text style={{color: focused ? '#6A7439' : 'grey', fontFamily: 'GothamMedium', fontSize: 10, marginTop: 5}}>Screen2</Text>
                        </View>
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}
