import {View, Text, Button} from 'react-native'


export default function ContactsIOS({navigation}) {
    return(
        <View>
            <Text>Contact Us!</Text> 
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}