import {View, Text, Button, ScrollView, Image, Pressable, Alert, Modal, TextInput, KeyboardAvoidingView} from 'react-native'
import {test} from '../navigation/StackDirection'
import { RootStackScreenProps } from '../types'
import { styles } from '../styles/StyleSheet'
import React, {useCallback, useRef, useState} from "react";
import { useTheme } from '@react-navigation/native'
import { OpenURLButton } from '../CustomProps/OpenURL';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'
import { Annoucement } from '../CustomProps/AnnouncementCard';
import * as ImagePicker from 'expo-image-picker'
import { useQuery, useMutation } from 'convex/react';
import { api } from "../convex/_generated/api"



export default function HomeIOS() {
    const {colors} = useTheme()
    const video = useRef(null)
    const [isFullscreen, setFullscreen] = useState(false)
    const [status,setStatus] = useState({})
    const [isModalOpen, setModalVisibility] = useState(false)
    const [videoTitle, setVideoTitle] = useState('Video Title')
    const [image, setImage] = useState(null)
    const [AnnMessage, setAnnMessage] = useState('')
    const url = 'http://www.wilsoncalvarybc.org'
    const iuri = require('../assets/Images/WC-Logo.png')
    const events = useQuery(api.Annocements.get3Annoucments)
    const newAnn = useMutation(api.Annocements.addAnnoucments)



    const pickImg = async () => {
        console.log('Image Picker Clicked');
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
        console.log(result)

        if(!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    const addAnnoucement = () => {
        setModalVisibility(true)
        console.log('Adding a new Annoucement')
    }

    const handleMessage = (text) => {
        setAnnMessage(text)
    }

    const handleAddtoDatabase = async () => {
        if(image == null) {
            Alert.alert('Please Add a Image') 
        } else if (AnnMessage == '') {
            Alert.alert('Please Add A Message')
        }else {
            console.log('Adding to Database'); 
            try {
                await newAnn({ imageUrl: image, description: AnnMessage });
                setModalVisibility(false);
                setImage(null);
                setAnnMessage(null);
            } catch (error) {
                console.error('Error adding to database:', error);
                Alert.alert('Error', 'Failed to add announcement. Please try again later.');
            }
        }
    }


    return(
        <View style={styles.container}>
            {
            (isModalOpen == true) && 
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {
                Alert.alert("Modal Closed.");
                setModalVisibility(false);
                }}
            >
                <View style={styles.centeredView}>
                    <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.modalView}>
                        <Pressable onPress={() => {setModalVisibility(false); setImage(null)}} key={'deletePress'}>
                            <Ionicons style={[styles.modalCloseBtn]} name='close-circle' size={25} key={'delete'}/>
                        </Pressable>
                        <Text style={styles.titleText}>Add a New Annoucement</Text>
                        <Text style={{marginTop: 12, marginBottom: 12}}>Add Image</Text>
                        {
                        image ?
                        <Pressable onPress={pickImg}> 
                            <Image source={{uri:image}} style={styles.ModalImgView}/>
                        </Pressable>     
                        :
                            <Pressable style={styles.ModalImgView} onPress={pickImg}>
                                <Ionicons color={'green'} name='add-circle' key={'add'} size={30}/>
                            </Pressable>
                        }
                        <Text style={{marginTop: 12, marginBottom: 12}}>Add Message</Text>
                        
                        <TextInput
                            value={AnnMessage}
                            style={styles.textfield}
                            onChangeText={handleMessage} 
                            multiline   
                        />
                        
                        <Pressable style={styles.addToDBbtn} onPress={handleAddtoDatabase}>
                            <Text style={[styles.titleText, {color: 'white'}]}>Add</Text>
                        </Pressable>
                    </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
            }
        <ScrollView style={[styles.mainView,{backgroundColor: colors.background}]}>
            <View style={[styles.Contentcontainer, {backgroundColor: '#066593'}]}>
                {(test == false) && <Text style={[styles.titleText, {color: 'white'}]}>Admin</Text>}
                <Video
                    ref={video}
                    style={styles.video}
                    source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
                    useNativeControls
                    isLooping
                    onPlaybackStatusUpdate={setStatus}
                />
                <Text style={styles.videoTitle}>"{videoTitle}"</Text> 
            </View>
            <View style={[styles.Contentcontainer, {paddingBottom: 5, backgroundColor: '#acd0e2'}]}>
                {
                events?.map(({_id, description, imageUrl}) => ( 
                <Annoucement 
                    style={[styles.card,{backgroundColor: '#acd0e2'}]} 
                    imguri={{uri:imageUrl}} 
                    imgsize={180} 
                    btnsize={25} 
                    message={description} 
                    id={_id}
                    key={_id}
                />
                ))
                }
                 {/* add a condtional here for if there are less than 3 annoucements shown */}
                 { (test == false) &&
                    <Pressable onPress= {addAnnoucement}>
                        <Ionicons style={styles.addButton} name='add-circle' key={'add'} size={30}/>
                    </Pressable>
                 }
            </View>
            <View style= {[styles.Contentcontainer, {padding: 15, backgroundColor: '#066593'}]}>
                <OpenURLButton url={url} imgUri={iuri} size={160} />
                <Text style={[styles.titleText, {color: 'white'}]}>WCBC Webapge</Text>
            </View>
        </ScrollView>
        </View>
    )
}

