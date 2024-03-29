import React from "react";
import { View, Pressable, Image, ImageSourcePropType, Alert, DimensionValue, Text, StyleProp, TextStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { test } from "../navigation/StackDirection";
import { styles } from "../styles/StyleSheet";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";
import { useMutation } from "convex/react";


type AnnoucementProp = {
    imguri: ImageSourcePropType;
    btnsize: number;
    imgsize: DimensionValue;
    message: string;
    style: StyleProp<TextStyle>;
    id : Id<'Annoucements'>;
    str_id: Id<'_storage'>;
    isShareable?: boolean;
}



export const Annoucement = ({imguri, btnsize, message, imgsize, style, id, str_id, isShareable}: AnnoucementProp) => {

    const removeAnnouncement = useMutation(api.Annocements.deleteAnnoucment);
    const removeAnnImg = useMutation(api.Annocements.deleteImg)


    const handleDeleteAnnouncement = async () => {
        try {
            await removeAnnouncement({ id: id });
            await removeAnnImg({ storageNum: str_id });
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
                    {(!test) &&                      
                     <Pressable onPress={handleDeleteConfirmation} key={'deletePress'}>
                        <Ionicons style={[styles.deleteButton]} name='close-circle' size={btnsize} key={'delete'}/>
                     </Pressable>
                    }
                    <Image resizeMode="stretch" source={imguri} style={[styles.annImg,{width: imgsize, height: imgsize}]}/>
                    <Text style={[styles.text, {padding: 14}]}>{message}</Text>
                    {
                        (isShareable) &&
                        <View style={styles.annShareView}>
                            <Text style={styles.annShareTxt}>Share</Text>
                            <Pressable onPress={() => {console.log('Share Pressed')}}>
                            <Ionicons style={styles.annShare} name="share-outline" size={24} color="black" />
                            </Pressable>
                        </View>
                    }
        </View>
    )
}