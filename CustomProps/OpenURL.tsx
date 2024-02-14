import React from "react";
import { Pressable, Image, Linking, ImageSourcePropType, Alert, DimensionValue } from "react-native";
import { useCallback } from "react";

type OpenURLButtonProps = {
    url: string;
    imgUri: ImageSourcePropType;
    size: DimensionValue;
}

export const OpenURLButton = ({url, imgUri, size}: OpenURLButtonProps) => {

    const weblink = useCallback(async () => {
        const link = await Linking.canOpenURL(url)

    if (link) {
        await Linking.openURL(url);
    } else {
        Alert.alert('Failed to open URL')
    }
    }, [url]);
    return (
        <Pressable onPress={weblink}>
            <Image source={imgUri} style={{width: size, height: size, alignSelf:'center'}}/>
        </Pressable>
            )
}