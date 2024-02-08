import {View, Text, Button} from 'react-native'


export default function Give({navigation}) {
    return(
        <View>
            <Text>Give for Driods</Text>
            <Button title='Next Page' onPress={() => {navigation.navigate("Contact") }}/>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}