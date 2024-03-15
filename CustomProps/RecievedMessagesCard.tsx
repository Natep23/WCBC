import React from "react";
import { View, Pressable, Text, Alert, Modal} from "react-native";
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

    const [modalVisible, setModalVisible] = React.useState(false);
    const handleDeleteMessage = async () => {
        try {
            // Call the mutation function directly
            await removeMessage({ id: id });
            console.log('Message deleted successfully');
            setModalVisible(!modalVisible);
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
        <View style={[styles.card,{backgroundColor: '#acd0e2', flexDirection: 'column'}]}>
            {modalVisible && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                    >
                    <View style={[styles.centeredView, {opacity: 0.96}]}>
                    <View style={[styles.modalView, {width: '88%'}]}>
                        <Text style={[styles.titleText, {marginBottom: 4}]}>{fullName}</Text>
                        <Text style={{marginBottom: 14}}>{message}</Text>
                        <Text style={{marginBottom: 16}}>{email}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Pressable style={[{backgroundColor: 'blue', margin: 4, padding: 8, borderRadius: 6}]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{color: 'white'}}>Close</Text>
                            </Pressable>
                            <Pressable style={[{backgroundColor: 'red', margin: 4, padding: 8, borderRadius: 6}]} onPress={handleDeleteConfirmation}>
                                <Text style={{color: 'white'}}>Delete</Text>
                            </Pressable>
                        </View>
                        <Text style={{position: 'absolute', bottom: 3, right: 255, fontWeight: '300'}}>{date}</Text>
                        <Text style={{position: 'absolute', bottom: 3, right: 10, fontWeight: '300'}}>{readeabletime}</Text>
                            
                    </View>
                    </View>
                    </Modal>
            )}
            <Pressable onPress={() => setModalVisible(true)}>
            <Text style={{alignContent: 'flex-start', paddingLeft: 8, paddingTop: 4, fontWeight: 'bold', fontStyle: 'italic'}}>{fullName}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{alignContent: 'flex-start', paddingLeft: 8, fontWeight: '300'}}>{message}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}> 
                <Text style={{paddingTop: 2, paddingLeft: 8 , fontWeight: '300' }}>{email}</Text>
                <Text style={{paddingTop: 2, paddingRight: 6, fontWeight: '300'}}>{date}</Text>
                <Text style={{paddingTop: 2, paddingRight: 8, fontWeight: '300'}}>{readeabletime}</Text>
            </View>
            </Pressable>
        </View>    
    )

}