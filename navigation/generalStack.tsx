import React, { useState } from "react"; 
import { Button, Image, View, TouchableOpacity } from "react-native";
import { DrawerActions, NavigationContainer, useNavigation, useNavigationContainerRef, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { device } from "./Device";
import { theme1 } from "./theme";
import HomeIOS from "../IOSScreens/Home-ios";
import EventsIOS from "../IOSScreens/Events-ios";
import VideosIOS from "../IOSScreens/Videos-ios";
import GiveIOS from "../IOSScreens/Give-ios";
import ContactsIOS from "../IOSScreens/Contact-ios";
import Home from "../AndroidScreens/Home-dr";
import Events from "../AndroidScreens/Events-dr";
import Videos from "../AndroidScreens/Videos-dr";
import Give from "../AndroidScreens/Give-dr";
import Contacts from "../AndroidScreens/Contact-dr";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles/StyleSheet";
import {FontAwesome5, FontAwesome, FontAwesome6, Octicons} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'


const Stack = createBottomTabNavigator(); 

export default function Generalstack() {
const navRef = useNavigationContainerRef()
// const [isActiveColor, setActivateColor] = useState('black')

return(
    <NavigationContainer ref={navRef} theme= {theme1}>
        {(device == 'ios') && 
        <Stack.Navigator  
        screenOptions={
            {
                headerStyle : {backgroundColor: theme1.colors.primary},
                headerTitle: () => (
                    <TouchableOpacity onPress={()=> {navRef.navigate('Home')}}>
                        <View>
                            <Image source= {require( '../assets/Images/WC-Logo.png') } style= {styles.logo}/>
                        </View>
                    </TouchableOpacity>
                    ),
                tabBarActiveTintColor: theme1.colors.secondary, 
                headerRight: () => (    
                    <TouchableOpacity onPress={() => {console.log('settings pressed')}}>
                        <View style={{paddingRight: 12}}>
                            <FontAwesome5 name="grip-lines" size={22}/>
                        </View>
                    </TouchableOpacity>
                    ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {[console.log('Chat pressed'), navRef.navigate('Contact')]}}>
                        <View style={{paddingLeft: 12}}>
                            <FontAwesome name="wechat" size={22}/>
                        </View>
                    </TouchableOpacity>
                ),        
                        
            }
        }>
        <Stack.Screen name="Home" component={HomeIOS} options={
            {
                tabBarIcon: () => (<Ionicons name="home-sharp" size={24}/>)
            }
        }/>
        <Stack.Screen name="Events" component={EventsIOS} options={
            {
                tabBarIcon: () => (<FontAwesome6 name="newspaper" size={24} color="black"/>)
            }
        }/>
        <Stack.Screen name="Videos" component={VideosIOS} options={
            {
                tabBarIcon: () => (<Octicons name="video" size={24} color="black"/>)
            }
        }/>
        <Stack.Screen name="Give" component={GiveIOS} options={
            {
                tabBarIcon: () => (<Image style= {styles.logo} source={require('../assets/Images/giveIcon.png')}/>)
            }
        }/>
        <Stack.Screen name="Contact" component={ContactsIOS} options={{tabBarItemStyle: {display: 'none'}}}/>
        </Stack.Navigator>
        }
        {(device == 'Android') &&
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Events" component={Events}/>
        <Stack.Screen name="Videos" component={Videos}/>
        <Stack.Screen name="Give" component={Give}/>
        <Stack.Screen name="Contact" component={Contacts}/>
        </Stack.Navigator>
        }
    </NavigationContainer>
)
}