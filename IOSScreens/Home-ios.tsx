import {View, Text, Button} from 'react-native'
import {test} from '../navigation/rootNav'
import { RootStackScreenProps } from '../types'
import { styles } from '../styles/StyleSheet'

export default function HomeIOS({navigation}: RootStackScreenProps) {
    return(
        <View>
            <Text style={styles.text}>Home</Text>
            <Button title='Next Page' onPress={() => {navigation.navigate("Events") }}/>
            {(test == false) && <Text>Admin</Text>}
        </View>
    )
}