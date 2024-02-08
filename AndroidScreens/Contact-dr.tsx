import {View, Text, Button} from 'react-native'


export default function Contacts({navigation}) {
    return(
        <View>
            <Text>Contact Us! for Driods</Text> 
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}