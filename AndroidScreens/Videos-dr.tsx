import {View, Text, Button} from 'react-native'


export default function Videos({navigation}) {
    return(
        <View>
            <Text>Videos for Driods</Text>
            <Button title='Next Page' onPress={() => {navigation.navigate("Give") }}/>
            <Button title='Go Home' onPress={() => {navigation.navigate("Home") }}/>
        </View>
    )
}