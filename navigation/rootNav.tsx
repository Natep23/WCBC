import React from "react";
import Generalstack from "./generalStack";
import AdminStack from "./adminStack";
import { Platform } from "react-native";

export const test = false;

export const theme1 = {
    colors: {
        primary: '#e5e85d',
        background: '#cccecf',
        secondary: '#0A42B0'
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