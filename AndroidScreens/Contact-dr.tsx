import {View, Text, Button} from 'react-native'
import React from 'react'



export default function Contacts({navigation}) {
    return(
        <View>
            <Text>Contact Us! for Driods</Text> 
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}