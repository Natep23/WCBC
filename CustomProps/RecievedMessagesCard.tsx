import React from "react";
import { View, Pressable, Text, Alert} from "react-native";
import {styles} from "../styles/StyleSheet";
import { api } from "../convex/_generated/api";
import { useMutation } from "convex/react";
import { Id } from "../convex/_generated/dataModel";
import { Ionicons } from '@expo/vector-icons'


type RecievedMessageProp = {
    message: string;
    firstname: string;
    lastname: string;
    email: string;
    time: number;
    id: Id<'ContactMessages'>;
}

export const RecievedMessage = ({message, firstname, lastname, email,time,id}: RecievedMessageProp) => {    
    const fName = firstname
    const lName = lastname
    const fullName = fName + ' ' + lName;
    const readeabletime = new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true});
    const date = new Date(time).toLocaleDateString();
    const removeMessage = useMutation(api.Messages.deleteMessage);

    const handleDeleteMessage = async () => {
        try {
            // Call the mutation function directly
            await removeMessage({ id: id });
            console.log('Message deleted successfully');
        } catch (error) {
            console.error('Failed to delete Message:', error);
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
                    onPress: handleDeleteMessage,
                },
            ]
        );
    };
    return (
        <View style={[styles.card,{backgroundColor: '#acd0e2'}]}>
            <Pressable onPress={handleDeleteConfirmation} key={'deletePress'}>
                        <Ionicons style={[styles.deleteButton]} name='close-circle' size={24} key={'delete'}/>
            </Pressable>
            <Text style={styles.text}>{fullName}</Text>
            <Text style={styles.text}>{message}</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{readeabletime}</Text>
        </View>    
    )

}