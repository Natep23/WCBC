import {View, Text, Button, ScrollView, Image} from 'react-native'
import {test} from '../navigation/rootNav'
import { RootStackScreenProps } from '../types'
import { styles } from '../styles/StyleSheet'
import React, {useState} from "react";
import { useTheme } from '@react-navigation/native'


export default function HomeIOS() {
    const {colors} = useTheme()
    return(
        <View style={styles.container}>
        <ScrollView style={[styles.mainView,{backgroundColor: colors.background}]}>
            <Text style={styles.titleText}>Latest Video</Text>
            <Text style={styles.text}>Home</Text>
            <Image source={require('../assets/Images/Recreated_WCBC_Coin.png')} style={{width:48, height:48, alignSelf: 'center'}}></Image>
            {(test == false) && <Text>Admin</Text>}
        </ScrollView>
        </View>
    )
}

