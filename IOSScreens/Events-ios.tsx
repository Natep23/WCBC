import React from 'react'
import {View, Text, Button} from 'react-native'


export default function EventsIOS({navigation}) {
    return(
        <View>
            <Text>Events</Text>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}