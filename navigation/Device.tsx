import { Platform } from "react-native";

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