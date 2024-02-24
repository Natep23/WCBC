import React from 'react'
import {View, Text, Button, ScrollView, Pressable} from 'react-native'
import { styles } from '../styles/StyleSheet'
import { test } from '../navigation/StackDirection'
import { Ionicons } from '@expo/vector-icons'
import { Annoucement } from '../CustomProps/AnnouncementCard'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'

export default function EventsIOS({navigation}) {
    const annoucements = useQuery(api.Annocements.getAnnoucments)

    const addAnnoucement = () => {

    }

    return(
        <ScrollView>
            {annoucements?.map(({_id, description, imageUrl}) => ( 
                <Annoucement 
                    style={[styles.card,{backgroundColor: '#acd0e2'}]} 
                    imguri={{uri:imageUrl}} 
                    imgsize={180} 
                    btnsize={25} 
                    message={description} 
                    id={_id}
                    key={_id}
                    />
                ))
            }
            { (test == false) &&
                    <Pressable onPress= {addAnnoucement}>
                        <Ionicons style={styles.addButton} name='add-circle' key={'add'} size={30}/>
                    </Pressable>
            }

        </ScrollView>
    )
}