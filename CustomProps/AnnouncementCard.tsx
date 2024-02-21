import React from "react";
import { View, Pressable, Image, ImageSourcePropType, Alert, DimensionValue, Text, StyleProp, TextStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { test } from "../navigation/StackDirection";
import { styles } from "../styles/StyleSheet";



type AnnoucementProp = {
    imguri: ImageSourcePropType;
    btnsize: number;
    imgsize: DimensionValue;
    message: string;
    style: StyleProp<TextStyle>;
}

const handleDeleteAnnoucement = () => {
    
    Alert.alert('Warning', 'Are You Sure You Want to Delete?', [
        {
            text: 'Cancel', 
            style: 'cancel', 
            onPress: () => console.log('Delete Canceled')
        }, 
        {
            text: 'Continue',
            onPress: () => console.log('Deleting the annoucemnet') // add delete mutation here
        }
    ]
    )
}

export const Annoucement = ({imguri, btnsize, message, imgsize, style}: AnnoucementProp) => {
    return (
        <View style={style}>
                    {(test == false) &&                      
                     <Pressable onPress={handleDeleteAnnoucement} key={'deletePress'}>
                        <Ionicons style={[styles.deleteButton]} name='close-circle' size={btnsize} key={'delete'}/>
                     </Pressable>
                    }
                    <Image source={imguri} style={[styles.annImg,{width: imgsize, height: imgsize}]}/>
                    <Text style={[styles.text, {padding: 14}]}>{message}</Text>
                </View>
    )
}