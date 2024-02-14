import {View, Text, Button, ScrollView, Image, Pressable, Linking, Alert, ImageSourcePropType} from 'react-native'
import {test} from '../navigation/rootNav'
import { RootStackScreenProps } from '../types'
import { styles } from '../styles/StyleSheet'
import React, {useCallback, useRef, useState} from "react";
import { useTheme } from '@react-navigation/native'
import { OpenURLButton } from '../CustomProps/OpenURL';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'



export default function HomeIOS() {
    const {colors} = useTheme()
    const video = useRef(null)
    const [isFullscreen, setFullscreen] = useState(false)
    const [status,setStatus] = useState({})
    const [videoTitle, setVideoTitle] = useState('Video Title')
    const url = 'http://www.wilsoncalvarybc.org'
    const uri = require('../assets/Images/Recreated_WCBC_Coin.png')

    return(
        <View style={styles.container}>
        <ScrollView style={[styles.mainView,{backgroundColor: colors.background}]}>
            <View style={[styles.Contentcontainer, {backgroundColor: '#066593'}]}>
                <Text style={[styles.titleText, {color:'white'}]}>Latest Video</Text>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
                    useNativeControls
                    isLooping
                    onPlaybackStatusUpdate={setStatus}
                />
                <Text style={styles.videoTitle}>"{videoTitle}"</Text> 
                {(test == false) && <Text style={styles.text}>Admin</Text>}
            </View>
            <View style={[styles.Contentcontainer, {paddingBottom: 5, backgroundColor: '#066593'}]}>
                <Text style={[styles.titleText, {color: 'white'}]}>Annoucements</Text>
                
                <View style={styles.card}>
                    {(test == false) && [
                    <Ionicons style={styles.addButton} name='add-circle'/>,
                    <Ionicons style={styles.deleteButton} name='close-circle'/>
                    ]}
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>
                    <Text style={styles.text}>Test</Text>

                </View>
            </View>
            <View style= {[styles.Contentcontainer, {padding: 15, backgroundColor: '#066593'}]}>
                <OpenURLButton url={url} imgUri={uri} size={160} />
                <Text style={[styles.titleText, {color: 'white'}]}>WCBC Webapge</Text>
            </View>
        </ScrollView>
        </View>
    )
}

