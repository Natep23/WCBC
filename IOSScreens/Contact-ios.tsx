import React from 'react'
import { useState } from 'react'
import {View, Text, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Alert} from 'react-native'
import { test } from '../navigation/StackDirection'
import { styles } from '../styles/StyleSheet'
import { welcome } from '../LengthyTexts/ConnectCardWelcome'
import { useQuery, useMutation } from 'convex/react'
import { api } from '../convex/_generated/api'
import { useNavigation } from '@react-navigation/native'
import { RecievedMessage } from '../CustomProps/RecievedMessagesCard'

export default function ContactsIOS() {
    const [fName, setfirstName] = useState('')
    const [lName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const addNewMessage = useMutation(api.Messages.addMessage)
    const messages = useQuery(api.Messages.getMessage)
    const navigation = useNavigation()

    const handlefName = (text: string) => {
        setfirstName(text)
    }
    const handlelName = (text: string) => {
        setLastName(text)
    }
    const handleEmail = (text: string) => {
        setEmail(text)
    }

    const handleMessage = (text: string) => {
        setMessage(text)
    }

    const handleSendMessage = async () => {
        if(fName == '') {
            Alert.alert('Warning','Please Add Your First Name')
        } else if(lName == '') {
            Alert.alert('Warning','Please Add Your Last Name')
        } else if(message == '') {
            Alert.alert('Warning','Please add a Message')
        } else {
            try{
                await addNewMessage({firstName: fName, lastName: lName, email: email, message: message})
                setfirstName('')
                setLastName('')
                setEmail('')
                setMessage('')
                Alert.alert('Success!','Message sent', [{text: 'OK', onPress: ()=> {navigation.navigate('Home')}}])
            }catch(error) {    
            Alert.alert('Message Failed to send. Please try again Later')
        }
    }
}
    return(
        <KeyboardAvoidingView enabled={true} behavior='padding'>            
        <ScrollView>
            {test? 
            [
                <Text style={[styles.titleText, {alignSelf: 'flex-start', padding: 10}]} key={1}>Contact Us!</Text>,
                <Text style={{padding: 10}} key={2}>{welcome}</Text>,
                <Text style={styles.nameInpt}key={3}>First Name</Text>,
                <TextInput
                    value={fName}
                    style= {styles.contactTxtField}
                    onChangeText={handlefName}
                    key={4}
                />,
                <Text style={styles.nameInpt}key={5}>Last Name</Text>,
                <TextInput
                    value={lName}
                    style= {styles.contactTxtField}
                    onChangeText={handlelName}
                    key={6}
                />,
                <Text style={styles.nameInpt}key={7}>Email</Text>,
                <TextInput
                    value={email}
                    style= {styles.contactTxtField}
                    keyboardType='email-address'
                    onChangeText={handleEmail}
                    textContentType='emailAddress'
                    key={8}
                />,
                <Text style={styles.nameInpt}key={9}>Message</Text>,
                    <TextInput
                        value={message}
                        style= {styles.MessageTxtField}
                        onChangeText={handleMessage}
                        multiline
                        key={10}
                    />,
                <Pressable style={[styles.addToDBbtn, {width: '22%', alignSelf: 'center'}]} onPress={handleSendMessage} key={11}>
                    <Text style={[styles.titleText, {color: 'white'}]}>Send</Text> 
                </Pressable>
            ]
            : 
            [
                <View style={[styles.card,{backgroundColor: '#7ab8d6'}]} key={1}>
                    <Text style={[styles.titleText, {alignSelf: 'center', padding: 10}]}> User Messages </Text>
                </View>,
                <View style={[styles.card,{backgroundColor: '#7ab8d6'}]} key={2}>
                    {messages && messages.length > 0 ? 
                    messages?.map((message) => (
                        <RecievedMessage 
                        message={message.message} 
                        firstname={message.firstName} 
                        lastname={message.lastName} 
                        email={message.email} 
                        time={message._creationTime} 
                        id={message._id}
                        key={message._id}
                        />
                    ))
                    : 
                    (<Text style={[styles.titleText, {alignSelf: 'center', padding: 10}]}> No New Messages </Text>) } 
                </View>,
            ]
            
            }
            </ScrollView>      
        </KeyboardAvoidingView>    
    )
}