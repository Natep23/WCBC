import {View, Text, Button} from 'react-native'
import React from 'react'



export default function Give({navigation}) {
    return(
        <View>
            <Text>Give for Driods</Text>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}