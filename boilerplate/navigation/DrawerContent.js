import React, {useState} from 'react';
import { ScrollView,Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';

const { height, width } = Dimensions.get('window');

const Drawer = createDrawerNavigator();

export default function DrawerContent({navigation}) {

    const [screen, setScreen] = useState("Home");

    function navigateScreen(val){
        navigation.navigate(val)
        setScreen(val)
    }
  
    return (

        <ScrollView>

            <View style={{marginBottom: 10, alignItems: 'center'}}>
                <View
                    style={{
                        width: width*(2/3),
                        height: width*(2/5),
                        alignItems:'center',
                        justifyContent: 'center',
                        backgroundColor: "#E7F3DB"
                        
                    }}
                >   
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{color: '#8E935F', fontFamily: 'GothamMedium', fontSize: 16, marginTop: 20}}>Your Customized Drawer</Text>
                    </View>
                </View>
            
            </View>

            <View style={{marginTop: 20}}>
                <TouchableOpacity
                    style={{
                    flexDirection: 'row', 
                    marginBottom: 10,
                    marginVertical: 5, 
                    paddingVertical: 25,
                    marginLeft: 20,
                    paddingLeft: width*(1/9),
                    marginRight: 20,
                    borderRadius: 100,
                    backgroundColor: screen=="Home" ? "#E7F3DB" : "white"
                }}
                    onPress={() => navigateScreen("Home")}
                >
                    <Image style={{width: 30, height: 30, tintColor: screen=="Home" ? "#8E935F" : "grey"}} source={require('../assets/icons/home.png')} />
                    <Text style={{marginLeft: 25, alignSelf: 'center' ,fontFamily: 'GothamMedium', fontSize: 16, color: screen=="Home" ? "#8E935F" : "grey"}}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                    flexDirection: 'row', 
                    marginBottom: 10,
                    marginVertical: 5, 
                    paddingVertical: 25,
                    marginLeft: 20,
                    paddingLeft: width*(1/9),
                    marginRight: 20,
                    borderRadius: 100,
                    backgroundColor: screen=="Profile" ? "#E7F3DB" : "white"
                }}
                    onPress={() => navigateScreen("Profile")}
                >
                    <Image style={{width: 30, height: 30, tintColor:  screen=="Profile" ? "#8E935F" : "grey"}} source={require('../assets/icons/profile.png')} />
                    <Text style={{marginLeft: 25, alignSelf: 'center' ,fontFamily: 'GothamMedium', fontSize: 16, color: screen=="Profile" ? "#8E935F" : "grey"}}>Profile</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}
