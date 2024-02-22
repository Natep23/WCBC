import React from "react";
import { View, Pressable, Image, ImageSourcePropType, Alert, DimensionValue, Text, StyleProp, TextStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { test } from "../navigation/StackDirection";
import { styles } from "../styles/StyleSheet";
import { api } from "../convex/_generated/api";
import { useMutation } from "convex/react";


type AnnoucementProp = {
    imguri: ImageSourcePropType;
    btnsize: number;
    imgsize: DimensionValue;
    message: string;
    style: StyleProp<TextStyle>;
    id : string;
}



export const Annoucement = ({imguri, btnsize, message, imgsize, style, id}: AnnoucementProp,) => {

    const removeAnnouncement = useMutation(api.Annocements.deleteAnnoucment);

    const handleDeleteAnnouncement = async () => {
        try {
            // Call the mutation function directly
            await removeAnnouncement({ id: id });
            console.log('Announcement deleted successfully');
        } catch (error) {
            console.error('Failed to delete announcement:', error);
        }
    };
    
    const handleDeleteConfirmation = () => {
        Alert.alert(
            'Warning',
            'Are you sure you want to delete?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => console.log('Delete canceled'),
                },
                {
                    text: 'Continue',
                    onPress: handleDeleteAnnouncement,
                },
            ]
        );
    };
    return (
        <View style={style}>
                    {(test == false) &&                      
                     <Pressable onPress={handleDeleteConfirmation} key={'deletePress'}>
                        <Ionicons style={[styles.deleteButton]} name='close-circle' size={btnsize} key={'delete'}/>
                     </Pressable>
                    }
                    <Image source={imguri} style={[styles.annImg,{width: imgsize, height: imgsize}]}/>
                    <Text style={[styles.text, {padding: 14}]}>{message}</Text>
                </View>
    )
}