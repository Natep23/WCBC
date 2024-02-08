import {View, Text, Button} from 'react-native'


export default function GiveIOS({navigation}) {
    return(
        <View>
            <Text>Give</Text>
            <Button title='Next Page' onPress={() => {navigation.navigate("Contact") }}/>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}