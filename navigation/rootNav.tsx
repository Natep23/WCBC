import React from "react";
import Generalstack from "./generalStack";
import AdminStack from "./adminStack";
import { Platform } from "react-native";

export const test = true;

export const theme1 = {
    colors: {
        primary: '#000000',
        secondary: '#e5e85d',
        background: '#cccecf'
    }
}

function getMobileOS() {
    if (Platform.OS === 'android') {
        return "Android"
    }

    if (Platform.OS === 'ios') {
        return "ios"
    }
    return "Unknown"
}

 export const device = getMobileOS()

export default function RootNav() {

    return test ?  <Generalstack/> : <AdminStack/>;
}