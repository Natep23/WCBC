import {View, Text, Button} from 'react-native'
import {test} from '../navigation/rootNav'
import { styles } from '../styles/StyleSheet'

export default function Home({navigation}) {
    return(
        <View>
            <Text style={styles.text}>Home for Droids</Text>
            <Button title='Next Page' onPress={() => {navigation.navigate("Events") }}/>
            {(test == false) && <Text>Admin</Text>}
        </View>
    )
}