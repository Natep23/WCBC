import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { theme1 } from "./rootNav";
import { device } from "./rootNav";
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
import { RootStackParamList } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function AdminStack(){
    const Stack = createBottomTabNavigator();

    return(
        <NavigationContainer theme={theme1}>
        {(device == 'ios') && 
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeIOS}/>
        <Stack.Screen name="Events" component={EventsIOS}/>
        <Stack.Screen name="Videos" component={VideosIOS}/>
        <Stack.Screen name="Give" component={GiveIOS}/>
        <Stack.Screen name="Contact" component={ContactsIOS}/>
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