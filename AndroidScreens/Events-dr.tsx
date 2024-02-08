import {View, Text, Button} from 'react-native'
import React from 'react'



export default function Events({navigation}) {
    return(
        <View>
            <Text>Events for Driods</Text>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}