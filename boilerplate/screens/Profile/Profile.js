import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default function Profile ({ navigation }) {

    return (
        <View>
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

            <View style={{alignItems: 'center', marginTop: 40}}>
                <Image style={{width: 150, height: 150, borderRadius: 100}} source={require('../../assets/icons/star.png')}  />
                <Text style={{fontFamily: 'GothamMedium', fontSize: 20, color: '#6A7439', borderBottomWidth: 5, borderBottomColor: '#EBF696', marginTop: 40}}>Profile Screen</Text>
            </View>
        </View>
    )
}

