import {View, Text, Button, ScrollView, Image} from 'react-native'
import {test} from '../navigation/rootNav'
import { RootStackScreenProps } from '../types'
import { styles } from '../styles/StyleSheet'
import React, {useState} from "react";
import { useTheme } from '@react-navigation/native'

export default function HomeIOS() {
    const {colors} = useTheme()
    const [ImageUrl, setImageUrl] = useState('./assets/Images/Recreated_WCBC_Coin.png')
    return(
        <View style={styles.container}>
        <ScrollView style={[styles.mainView,{backgroundColor: colors.background}]}>
            <Text style={styles.titleText}>Latest Video</Text>
            <Text style={styles.text}>Home</Text>
            <Image source={{uri: ImageUrl}} style={{width:12, height:12}}></Image>
            {(test == false) && <Text>Admin</Text>}
        </ScrollView>
        </View>
    )
}

