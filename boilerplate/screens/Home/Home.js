import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../../navigation/tabs';

export default function Home ({ navigation }) {
    return (
        <NavigationContainer
            independent={true}
        >
            <TouchableOpacity style={{
                marginTop: 40,
                marginLeft: 25,
                backgroundColor: 'white',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center'
            }} onPress={() => navigation.toggleDrawer()}>
                <Image style={{width: 30, height: 30, tintColor: "#6A7439"}} source={require('../../assets/icons/menu.png')} />
            </TouchableOpacity>
            
            <Tabs/>
        </NavigationContainer>
    )
}