import React from 'react';
import {Text,View, Image, TouchableOpacity} from 'react-native';

export default function Screen2 ({ navigation }) {

    return (
        <View>
            <View style={{alignItems: 'center', marginTop: 100}}>
                <Text style={{fontFamily: 'GothamMedium', fontSize: 40, color: '#6A7439', borderBottomWidth: 5, borderBottomColor: '#EBF696'}}>Screen 2</Text>
            </View>
            <TouchableOpacity
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 175,
                    height: 90,
                    borderRadius: 100,
                    backgroundColor: '#DBEA8D',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 50
                }}
                onPress={() => navigation.navigate("Screen1")}
            >
                <Text style={{fontFamily: 'GothamMedium', fontSize: 20, color: '#6A7439', flex: 1, textAlign: 'center', marginLeft: 20}}>Screen 1</Text>
                <Image style={{width: 20, height: 20, borderRadius: 100, tintColor: '#6A7439', marginRight: 20}} source={require('../assets/icons/right-arrow.png')}  />
            </TouchableOpacity>
        </View>
    )
}
