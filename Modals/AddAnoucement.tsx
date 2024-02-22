import { View, Pressable, Text, TextInput, Image, Modal, Alert, KeyboardAvoidingView } from "react-native";
import { styles } from "../styles/StyleSheet";
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'


export function addAnnModal() {
    const [isModalOpen, setModalVisibility] = useState(false)
    const [image, setImage] = useState(null)
    const [AnnMessge, setAnnMessage] = useState(null)



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

    const handleMessage = (AnnMessge: string) => {
        setAnnMessage(AnnMessge)
    }

    const handleAddtoDatabase = () => {
        if(image == null) {
            Alert.alert('Please Add a Image') 
        } else if (AnnMessge == null) {
            Alert.alert('Please Add A Message')
        }else {
            //Add Upload to database here
            console.log('Adding to Database'); 
            setModalVisibility(false); 
            setImage(null)
            setAnnMessage(null)
        }
    }

    return(
       <View>
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
                            value={AnnMessge}
                            style={styles.textfield}
                            onChange={handleMessage} 
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
       </View>
    )
}