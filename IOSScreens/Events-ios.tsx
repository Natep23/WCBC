import {View, Text, Button} from 'react-native'


export default function EventsIOS({navigation}) {
    return(
        <View>
            <Text>Events</Text>
            <Button title='Next Page' onPress={() => {navigation.navigate("Videos") }}/>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}