import React from 'react'
import {View, Text, Button} from 'react-native'


export default function VideosIOS({navigation}) {
    return(
        <View>
            <Text>Videos</Text>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}