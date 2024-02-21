import {View, Text, Button} from 'react-native'
import {test} from '../navigation/StackDirection'
import { styles } from '../styles/StyleSheet'
import React from 'react'

export default function Home({navigation}) {
    return(
        <View>
            <Text style={styles.text}>Home for Droids</Text>
            {(test == false) && <Text>Admin</Text>}
        </View>
    )
}